/** 7th **/
var UserAgent = function(userAgent) {
	ua: userAgent
}

UserAgent.prototype.ua = navigator.userAgent.toLowerCase();

UserAgent.prototype = {
	
	os: (function(a) {
		var o;
		if (a.ua.indexOf("win") > -1) {
			o = "win";
		} else if (a.ua.indexOf("mac") > -1) {
			o = "mac";
		} else if (a.ua.indexOf("linux") > -1) {
			o = "linux";
		} else {
			o = "other";
		}
		return o;
	})(UserAgent.prototype),
	
	browser: (function(a) {
		if (a.ua.indexOf("msie") > -1 || a.ua.indexOf("trident") > -1) {
			b = "msie";
		} else if (a.ua.indexOf("firefox") > -1) {
			b = "firefox";
		} else if (a.ua.indexOf("safari") > -1 && a.ua.indexOf("chrome") == -1) {
			b = "safari";
		} else if (a.ua.indexOf("chrome") > -1) {
			b = "chrome";
		} else {
			b = "other";
		}
		return b;
	})(UserAgent.prototype),
	
	version: (function(a) {
		var v;
		if (a.ua.indexOf("msie") > -1) {
			v = parseInt(a.ua.substring(a.ua.indexOf("msie") + 5));
		} else if (a.ua.indexOf("trident") > -1) {
			v = parseInt(a.ua.substring(a.ua.indexOf("rv") + 3));
		} else if (a.ua.indexOf("firefox") > -1) {
			v = parseInt(a.ua.substring(a.ua.indexOf("firefox") + 8));
		} else if (a.ua.indexOf("safari") > -1 && a.ua.indexOf("chrome") == -1) {
			v = parseInt(a.ua.substring(a.ua.indexOf("version") + 8));
		} else if (a.ua.indexOf("chrome") > -1) {
			v = parseInt(a.ua.substring(a.ua.indexOf("chrome") + 7));
		} else {
			v = undefined;
		}
		return v;
	})(UserAgent.prototype),
	
	device: (function(a) {
		var d;
		if (a.ua.indexOf("iphone") > -1) {
			d = "iphone";
		} else if (a.ua.indexOf("ipod") > -1) {
			d = "ipod";
		} else if (a.ua.indexOf("ipad") > -1) {
			d = "ipad";
		} else if (a.ua.indexOf("android") > -1) {
			d = a.ua.indexOf("mobile") > -1 ? "android_mobile" : "android_tablet";
		} else {
			d = "other";
		}
		return d;
	})(UserAgent.prototype)
}

var UA = new UserAgent(navigator.userAgent.toLowerCase());

