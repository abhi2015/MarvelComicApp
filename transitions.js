window.onscroll = scroll;
function scroll() {
    var scrollValue = document.documentElement.scrollTop;
    console.log(scrollValue);
    document.getElementById("appbar").style.top = (-(scrollValue / 3)).toString() + "px";
};
