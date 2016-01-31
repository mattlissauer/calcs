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
	}
}