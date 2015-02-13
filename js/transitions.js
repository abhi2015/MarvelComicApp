window.onscroll = scroll;
function scroll() {
    var scrollValue = window.pageYOffset;
    console.log(scrollValue);
    document.getElementById("appbar").style.top = (-(scrollValue / 3)).toString() + "px";
};

function opaque(x)
{

  
  x.style.opacity=0.1;

}

function normal(x)
{

  
  x.style.opacity=1;

}

