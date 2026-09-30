from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
base=Path(__file__).resolve().parent/'previews'
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
def sheet(filename,title,items,size,cols):
 w,h=size;out=Image.new('RGB',(w*cols,74+(h+38)*((len(items)+cols-1)//cols)),(242,238,229));d=ImageDraw.Draw(out)
 d.text((25,18),title,font=ImageFont.truetype(font,24),fill=(45,40,35))
 for n,(file,label) in enumerate(items):
  im=Image.open(base/file).convert('RGB');im.thumbnail((w,h),Image.Resampling.LANCZOS);x=(n%cols)*w;y=74+(n//cols)*(h+38);out.paste(im,(x,y));d.text((x+18,y+h+8),label,font=ImageFont.truetype(font,17),fill=(55,47,40))
 out.save(base/filename)
sheet('tabby-walk-sheet.png','ACTUAL BLENDER RENDER  |  Walk cycle · 1 second',[(f'walk-{f:02}.png',f'{f/24:.2f}s  /  frame {f}') for f in [0,6,12,18]],(480,480),4)
sheet('tabby-turnaround-sheet.png','ACTUAL BLENDER RENDER  |  Tabby · rebuilt model',[('tabby-front.png','Front / orthographic'),('tabby-side.png','Side / orthographic'),('tabby-back.png','Back / orthographic'),('tabby-three-quarter.png','Three-quarter')],(640,640),4)
