function checkCookie() {
	let visitor = getCookie("visitor");
	if (visitor != "") {
		alert("Welcome again " + visitor);
	} else {
		visitor = prompt("What's your name?","");
		setCookie("visitor",visitor, 5);
		alert("Welcome " + visitor);
	}
}

function setCookie(cookie_name, cookie_value, expires_min) {
	let d = new Date();
	d.setTime(d.getTime() + (expires_min*1000*60));
	let cookie_expires = "expires="+ d.toUTCString();
	document.cookie = cookie_name + "=" + cookie_value + ";" + cookie_expires;
}

function getCookie(cookie_name) {
	let name = cookie_name + "=";
	let cookie_array = document.cookie.split(';');

	for (let i=0; i<cookie_array.length; i++) {
		let c = cookie_array[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name)==0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

//Loads file using AJAX then performs somefunction on that file
function loadDoc(url, somefunction) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			somefunction(this);
		}
	};
	xhttp.open("GET",url,true);
	xhttp.send();
}


//Displays the content in file
function displayfunction(xhttp) {
	//* document.getElementById("testing").innerHTML = xhttp.responseText.replace(/\\n/mg,"\n")
	//* document.getElementById("testing").innerHTML.toString.split("\n");

	document.getElementById("testing").innerHTML = xhttp.responseText;
}


//Checks whether visitor name is in a file
let important = false;
function checkImportant(xhttp) {
	let newtext = xhttp.responseText.replace(/\\n/mg,"\n")
	let array = newtext.split("\n");
	
	let visitor = getCookie("visitor");
	document.getElementById("p1").innerHTML=visitor;
	
	for (i of array) {
		if (visitor===array[i]) {
			important = true;
			break;
		}
		else {
			important = false;
		}
	}
	document.getElementById("p2").innerHTML=important;
}

document.getElementById("p3").innerHTML=important;



/*
function createForm() {
	for (let i=0; i<51; i++) {
		let new_label = document.createElement("label");
		label.setAttribute("for",i);

		let new_button = document.createElement("input");
		label.setAttribute("type","radio");
		label.setAttribute("id",i);
		label.setAttribute("name","speed_buttons");
}
}
*/
