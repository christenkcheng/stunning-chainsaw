/*
function make_cookie() {
	let cookie_name = "name=" + name + ";"
	
	let now = new Date(), expires = now;
	expires.setMinutes(expires.getMinutes()+1);
	let cookie_expires = "expires=" + expires.toUTCString() + ";";

	let cookie_path = "path=/;";

	document.cookie = cookie_name + cookie_expires + cookie_path;

	let x = document.cookie;
	alert(x);
}
*/

function checkCookie() {
	let visitor = getCookie("visitor");
	if (visitor != "") {
		alert("Welcome again " + visitor);
	} else {
		cookie_name = prompt("What's your name?","");
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
