i=0;
function change()
{
    s=document.getElementById("slide");
    a=["image/slider2.jpg","image/slider3.jpg","image/slider.jpg"];
   s.src=a[i];
   i++;
   if(i==a.length){
    i=0;
   }
}
setInterval(change,4000)