window.onscroll = scroll;
function scroll() {
    var scrollValue = window.pageYOffset;
    console.log(scrollValue);
    document.getElementById("appbar").style.top = (-(scrollValue / 3)).toString() + "px";
};

/*function big(x) {
    x.style.height="17%";
		x.style.width = "17%";
		x.style.paddingTop="17%";
		x.style.zIndex=1;

}
function normal(x)
{
	x.style.height="15%";
	x.style.width="15%";
	x.style.paddingTop="15%";
	x.style.zIndex=0;

}
*/

