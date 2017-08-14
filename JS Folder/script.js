function firstfocus(){
	document.getElementById("userid").focus();
}

function userid_validation(start,end) {
    var userlength = document.getElementById("userid").value.length;

 	if (userlength >=5 && userlength <=12) {
 		document.getElementById("userid").style.background="green";
 	return false;
}  
	else if (userlength===0) {
		console.log("User Id should not be empty!");
	}

 	else {
 		document.getElementById("userid").style.background="red";
	}
}

function passid_validation(start, end){
	var passlength = document.getElementById("passid").value.length;
	if (passlength >=7 && passlength <=12) {
 		document.getElementById("passid").style.background="green";
 	return false;
}  
	else if (passlength===0) {
		console.log("User password should not be empty!");
	}

 	else {
 		document.getElementById("passid").style.background="red";
	}
}

function allLetter(){
	var usernameinput = document.getElementById("username").value;
	var letters = /^[A-Za-z]+$/;
	if (!usernameinput.match(letters)){
		console.log("User's name should have alphabet characters only!");
		return true;
	}
}

function ValidateEmail() {
	var emailinput = document.getElementById("email").value;
	var validemail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
	if (!emailinput.match(validemail)){
		console.log("You have entered an invalid email format!");
	}
}

