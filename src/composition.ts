import { Vector3 } from 'three';
import { RADIUS } from './movement';
/** Horizon composition: character near the center, planet filling the lower frame. */
export function composeCamera(normal:Vector3, back:Vector3, zoom:number, position:Vector3, target:Vector3):void {
  position.copy(normal).multiplyScalar(RADIUS+1.8*zoom).addScaledVector(back,16*zoom);
  target.copy(normal).multiplyScalar(RADIUS+1.4);
}
