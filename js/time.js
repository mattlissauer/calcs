window.onload = function () {
	document.getElementById("runtime").onkeyup = function() {getTime()};
	function getTime () {
		var runtime = document.getElementById("runtime").value;
		var result = parseInt(runtime) * 60;
		if (isNaN(result)) {
			document.getElementById("timecalc").innerHTML = "Please enter a number"
		} else {
			document.getElementById("timecalc").innerHTML = result;
		}
	}
}