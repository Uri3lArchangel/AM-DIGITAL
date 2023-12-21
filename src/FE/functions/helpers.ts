

export const servicescardcalculation = (x:number,y:number,width:number,height:number)=>{
let topleft = (x>=0 && x <= width/3) && (y>=0 && y <= height/3)
let topcenter = (x >= width/3 && x<= (2*width)/3 )&& (y>=0 && y <= height/3)
let topright = (x >= (2*width)/3  && x<= width )&& (y>=0 && y <= height/3)
let midleft = (x>=0 && x <= width/3) && ( y >= height/3 && y <= (2*height)/3)
let midcenter = (x >= width/3 && x<= (2*width)/3 )&& ( y >= height/3 && y <= (2*height)/3)
let midright = (x >= (2*width)/3  && x<= width )&& ( y >= height/3 && y <= (2*height)/3)
let bottomleft = (x>=0 && x <= width/3) && ( y >= (2*height)/3 && y <= height)
let bottomcenter = (x >= width/3 && x<= (2*width)/3 )&& ( y >= (2*height)/3 && y <= height)
let bottomright = (x >= (2*width)/3  && x<= width ) && ( y >= (2*height)/3 && y <= height)

if(topleft) return "tl"
if(topcenter) return "tc"
if(topright) return "tr"
if(midleft) return "ml"
if(midcenter) return "mc"
if(midright) return "mr"
if(bottomleft) return "bl"
if(bottomcenter) return "bc"
if(bottomright) return "br"
}