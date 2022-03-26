var speed1=11//速度数值越大速度越慢
demo12.innerHTML=demo11.innerHTML
function Marquee1(){
if(demo12.offsetWidth-demo10.scrollLeft<=0)
demo10.scrollLeft-=demo11.offsetWidth
else{
demo10.scrollLeft++
}
}
var MyMar1=setInterval(Marquee1,speed1)
demo10.onmouseover=function() {clearInterval(MyMar1)}
demo10.onmouseout=function() {MyMar1=setInterval(Marquee1,speed1)}