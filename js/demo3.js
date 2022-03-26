var speed3=11//速度数值越大速度越慢
demo32.innerHTML=demo31.innerHTML
function Marquee3(){
if(demo32.offsetWidth-demo30.scrollLeft<=0)
demo30.scrollLeft-=demo31.offsetWidth
else{
demo30.scrollLeft++
}
}
var MyMar3=setInterval(Marquee3,speed3)
demo30.onmouseover=function() {clearInterval(MyMar3)}
demo30.onmouseout=function() {MyMar3=setInterval(Marquee3,speed3)}