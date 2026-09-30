import { Quaternion, Vector3 } from 'three';
export const RADIUS = 12;
export const SPEED = 2.25;
export type SurfaceState = { normal: Vector3; forward: Vector3; cameraBack: Vector3; distance: number };
export function createState(): SurfaceState { return { normal: new Vector3(0,1,0), forward: new Vector3(0,0,1), cameraBack: new Vector3(0,0,1), distance: 0 }; }
/** Exponential-map step on a sphere; parallel transport preserves the local frame. */
export function advance(state: SurfaceState, x: number, z: number, dt: number): boolean {
  const length = Math.hypot(x,z);
  if (!length || dt <= 0) return false;
  const back = state.cameraBack.clone().projectOnPlane(state.normal).normalize();
  const right = new Vector3().crossVectors(state.normal, back).normalize();
  const tangent = right.multiplyScalar(x / Math.max(1,length)).addScaledVector(back, z / Math.max(1,length));
  const distance = SPEED * Math.min(dt, 0.05) * Math.min(length,1);
  const axis = new Vector3().crossVectors(state.normal, tangent).normalize();
  const rotation = new Quaternion().setFromAxisAngle(axis, distance / RADIUS);
  state.normal.applyQuaternion(rotation).normalize();
  state.cameraBack.applyQuaternion(rotation).projectOnPlane(state.normal).normalize();
  state.forward.applyQuaternion(rotation);
  const wanted = tangent.applyQuaternion(rotation).normalize();
  // A signed tangent-plane turn is stable even for a 180-degree reversal.
  const angle = Math.atan2(new Vector3().crossVectors(state.forward,wanted).dot(state.normal), state.forward.dot(wanted));
  state.forward.applyAxisAngle(state.normal, angle * (1-Math.exp(-14*Math.min(dt,0.05)))).projectOnPlane(state.normal).normalize();
  state.distance += distance;
  return true;
}
