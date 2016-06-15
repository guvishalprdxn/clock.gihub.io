/* Author: Vishal Gupta

*/

function updateClock(){
	var currentTime = new Date ( );
	var secDeg = calToDeg(currentTime.getSeconds( ));
	document.getElementsByClassName("sec")[0].style.transform = "rotate("+secDeg+"deg)";
	var minDeg = calToDeg(currentTime.getMinutes( ));
	document.getElementsByClassName("min")[0].style.transform = "rotate("+minDeg+"deg)";
	var minDeg = calToHrs(currentTime.getHours( ));
	document.getElementsByClassName("hrs")[0].style.transform = "rotate("+minDeg+"deg)";
}
setInterval(updateClock, 1000);


function calToDeg(val){
	var Deg = val * 6;
	if (Deg>=360){
		Deg-=360;
	}
return Deg;
}

function calToHrs(val){
	var Deg = val * 30;
	if (Deg>=360){
		Deg-=360;
	}
return Deg;
}
















