var speed2=11//速度数值越大速度越慢
demo22.innerHTML=demo21.innerHTML
function Marquee2(){
if(demo22.offsetWidth-demo20.scrollLeft<=0)
demo20.scrollLeft-=demo21.offsetWidth
else{
demo20.scrollLeft++
}
}
var MyMar2=setInterval(Marquee2,speed2)
demo20.onmouseover=function() {clearInterval(MyMar2)}
demo20.onmouseout=function() {MyMar2=setInterval(Marquee2,speed2)}