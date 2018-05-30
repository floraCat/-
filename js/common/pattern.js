
/*
*
* 格式化处理
*
*/


/*价格保留两位数*/
function toPrice (val) {
	return parseInt(val).toFixed(2);
}


/*n秒后的时间 - 时分秒*/
function toTime (second) {
	var d = new Date(new Date().getTime() + second * 60 * 1000);
	var result = d.getHours() + ":"
	    	  + ( d.getMinutes() >= 10 ? d.getMinutes() : ("0" + d.getMinutes()) ) + ":" 
	    	  + ( d.getSeconds() >= 10 ? d.getSeconds() : ("0" + d.getSeconds()) )
	return result;
}

/*n天后的日期 - 年月日*/
function toDay (day) {
	var d = new Date();
    var today = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    var d2 = new Date(d);
    d2.setDate(d.getDate() + day);
	return d2.getFullYear() + "-" + (d2.getMonth()+1) + "-" + d2.getDate();
}

