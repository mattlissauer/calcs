// percent change formula = ( (y2 - y1) / y1 ) * 100
window.onload = function() {
	// document.getElementsByTagName("input").onkeyup = function() {getPerChange()};
	function getPerChange () {
		var valOne = document.getElementById("valOne").value;
		var valTwo = document.getElementById("valTwo").value;
		var valResult = ( ( parseInt(valTwo) - parseInt(valOne) ) / parseInt(valOne) ) * 100;
		console.log(valResult);
		if (isNaN(valResult)) {
			document.getElementById("perChangeResult").innerHTML = "Please enter a number"
		} else {
			document.getElementById("perChangeResult").innerHTML = valResult;
		}
	}
}



// document.getElementById("button").addEventListener()


// if (event.keyCode == 13) {
// 	document.getElementById("timecalc").click();
// }

// var runtime = function (getTime) {
//     console.log( runtime * 60 );

//     // document.getElementById("timecalc").innerHTML = getTime;
// };

// function getTime () {
// 	document.getElementById("timecalc").innerHTML = getTime;
// }

// $(document).ready (function(){
// // the above line will only run after pageload
// 	$("#timeCalc").click(getTime);
// });


// function numberAdd() {
// 	console.log ( "numberAdd as called!");
// 	var num1 = document.getElementById("num1").value;
// 	var num2 = document.getElementById("num2").value;
// 	document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
// }

// function AddOne() {
// 	document.getElementById("incrementer").innerHTML = parseInt(document.getElementById("incrementer").innerHTML) + 1;
// }