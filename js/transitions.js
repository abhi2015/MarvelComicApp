window.onscroll = scroll;
function scroll() {
    var scrollValue = window.pageYOffset;
    console.log(scrollValue);
    document.getElementById("appbar").style.top = (-(scrollValue / 3)).toString() + "px";
};
