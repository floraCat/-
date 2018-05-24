
/*http POST 请求*/
function postData(url,options,callback) {
	var self = this;
	var xmlhttp;
	function loadXMLDoc() {
		xmlhttp=null;
		if (window.XMLHttpRequest) {
		  xmlhttp=new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlhttp!=null) {
		  xmlhttp.onreadystatechange=state_Change;
		  xmlhttp.open("POST",url,true);
		  xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
		  xmlhttp.send(JSON.stringify(options));
		 } else {
		  alert("Your browser does not support XMLHTTP.");
		}
	}
	function state_Change() {
		if (xmlhttp.readyState==4) {
			if (xmlhttp.status==200) {
				var data = JSON.parse(xmlhttp.responseText);
				if (callback && 'function' === typeof callback) {
					callback(data)
				}
			} else {
				alert("Problem retrieving XML data");
			}
		}
	}
	loadXMLDoc();
}


/*http GET 请求*/
function getData(url,options,callback) {
	var self = this;
	var _options = '';
    for (var k in options) {
    	_options += '&' + k + '=' + options[k];
    }    
	var xmlhttp;
	function loadXMLDoc() {
		xmlhttp=null;
		if (window.XMLHttpRequest) {
		  xmlhttp=new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlhttp!=null) {
		  xmlhttp.onreadystatechange=state_Change;
		  xmlhttp.open("GET",url + '?' + _options.substr(1),true);
		  xmlhttp.send(null);
		 } else {
		  alert("Your browser does not support XMLHTTP.");
		}
	}
	function state_Change() {
		if (xmlhttp.readyState==4) {
			if (xmlhttp.status==200) {
				var data = JSON.parse(xmlhttp.responseText);
				if (callback && 'function' === typeof callback) {
					callback(data)
				}
			} else {
				alert("Problem retrieving XML data");
			}
		}
	}
	loadXMLDoc();
}
