window.onload = function () {
	document.getElementById("myTemp").onkeyup = function() {getTemp()};
	function getTemp () {
		var myTemp = document.getElementById("myTemp").value;
		var result = ((parseInt(myTemp) - 32) * 5 / 9).toFixed(2);
		if (isNaN(result)) {
			document.getElementById("tempcalc").innerHTML = "Please enter a number"
		} else {
			document.getElementById("tempcalc").innerHTML = result + "&#176;C";
		}
	}
	if (getTemp < 13) {
		console.log("This is cold");
		document.getElementById("img").innerHTML.src = "images/snowflake.png";
	}

}