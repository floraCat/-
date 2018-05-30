

/*倒计时 - 分秒*/
// 参数overTime未要倒数的时间戳
countTime(overTime, callback) {
	let self = this
	if(overTime <= 0) { // 倒计完
		clearTimeout(setTimeObj)
		if (callback && 'function' === typeof callback) {
			callback(false)
		}
		return
	} else {
		let data;
		let _mTime = Math.floor(overTime / 1000 / 60 % 60);
		let _sTime = Math.floor(overTime / 1000 % 60);
		data.mTime = _mTime >= 10 ? _mTime + "分" : '0' + _mTime + "分";
		data.sTime = _sTime >= 10 ? _sTime + "秒" : '0' + _sTime + "秒";
		if (callback && 'function' === typeof callback) {
			callback(data)
		}
	}
	var setTimeObj = setTimeout(self.countTime, 1000);
},