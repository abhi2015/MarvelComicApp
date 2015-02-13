window.onscroll = scroll;
function scroll() {
    var scrollValue = window.pageYOffset;
    console.log(scrollValue);
    document.getElementById("appbar").style.top = (-(scrollValue / 3)).toString() + "px";
};

function opaque(x)
{

  
  x.style.marginTop="100px";


}

function normal(x)
{

  
  x.style.marginTop="0px";

}
document.getElementById("image").addEventListener("touchstart", function(){
    document.getElementById("contain").style.marginTop="100px";
});

document.getElementById("image").addEventListener("touchend", function(){
    document.getElementById("contain").style.marginTop="0px";
});