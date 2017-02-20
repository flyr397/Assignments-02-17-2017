var sleepIn = function(weekday, vacation) {
	var today = new Date();
	var vacation = prompt("Are you on vacation?");


if (today.getDay() == 6 || today.getDay() == 0) {
		document.getElementById("demo").innerHTML= "You can sleep in!";
} else if (today.getDay() == 1 || today.getDay == 2 || today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 5 ) {
		document.getElementById("demo").innerHTML=  "Get Up!";
}else if (vacation == true) {
	document.getElementById("demo").innerHTML= "You're on vacation";
}
}