function calc_time(tstr){
	tstr=tstr.replace(/ /g,'') //delete all spaces
	if (tstr.match(/\+/g)) {
		operator='+'
	} else if (tstr.match(/\-/g)){
		operator='-'
	}// define +-
	var v1=tstr.split(operator)[0]// first number
	var v2=tstr.split(operator)[1]// second number
	// whatch out dots in seconds
	if (v1.match(/\./g)) {
		v1fixed=v1.split('.')[1].length
	}
	if (v2.match(/\./g)) {
		v2fixed=v2.split('.')[1].length
	}
	if (v1.match(/\./g) || v2.match(/\./g)) {
		fixed=Math.max(v1fixed,v2fixed)
	} else {
		fixed=0
	}
	
	var v1a=v1.split(':').map(Number)// first time array
	var v1sec=v1a[0]*3600+v1a[1]*60+v1a[2]
	var v2a=v2.split(':').map(Number)// second time array
	var v2sec=v2a[0]*3600+v2a[1]*60+v2a[2]
	if (operator=='+') {
		outsec=v1sec+v2sec
	} else if (operator=='-'){
		outsec=v1sec-v2sec
	}
	absoutsec=Math.abs(outsec)
	if (outsec<0) {
		var outh='-'+Math.floor(absoutsec/3600).toString()
	} else {
		var outh=Math.floor(absoutsec/3600).toString()
	}
	var outm=Math.floor((absoutsec%3600)/60).toString()
	var outs=((absoutsec%3600)%60).toFixed(fixed)
	var outall=outh+':'+outm+':'+outs
	return outall
}
