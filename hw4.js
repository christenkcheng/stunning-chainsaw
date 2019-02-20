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

function loadDoc(url, myfunction) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			myfunction(this);
		}
	};
	xhttp.open("GET",url,true);
	xhttp.send();
}

function myfunction(xhttp) {
	document.getElementById("testing").innerHTML = xhttp.responseText;
}

