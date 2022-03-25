var speed4=2//速度数值越大速度越慢
demo42.innerHTML=demo41.innerHTML
function Marquee4(){
if(demo42.offsetWidth-demo40.scrollLeft<=0)
demo40.scrollLeft-=demo41.offsetWidth
else{
demo40.scrollLeft++
}
}
var MyMar4=setInterval(Marquee4,speed4)
demo40.onmouseover=function() {clearInterval(MyMar4)}
demo40.onmouseout=function() {MyMar4=setInterval(Marquee4,speed4)}