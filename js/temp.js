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

		if (result <= 15) {
			console.log("This is cold");
			document.getElementById("emoj").src = "images/snowflake.png";
		} else {
			console.log("This is warm");
			document.getElementById("emoj").src = "images/sun.png";
		}

	} //end function 
}