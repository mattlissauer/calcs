// percent change formula = ( (y2 - y1) / y1 ) * 100

window.onload = function() {
	document.getElementById("valTwo").onkeyup = function() {getPerChange()};
	function getPerChange () {
		var valOne = document.getElementById("valOne").value;
		var valTwo = document.getElementById("valTwo").value;
		var valResult = (( ( parseInt(valTwo) - parseInt(valOne) ) / parseInt(valOne) ) * 100).toFixed(2);
		if (isNaN(valResult)) {
			document.getElementById("perChangeResult").innerHTML = "Please enter a number"
		} else {
			document.getElementById("perChangeResult").innerHTML = valResult + "%";
		} 

		if (valResult < 0 ) {
			document.getElementById("perChangeResult").style.backgroundColor = "red";
			document.getElementById("perChangeResult").style.color = "white";
			document.getElementById("emoj").src = "images/downtrend.png";
		} else {
			document.getElementById("perChangeResult").style.backgroundColor = "green";
			document.getElementById("perChangeResult").style.color = "white";
			document.getElementById("emoj").src = "images/uptrend.png";
		}

	} //end function



}