var a = 100
function F1() {
	var b = 200
	function F2() {
		var c = 300
		console.log(a)
		console.log(b)
		console.log(c)
	}
	F2()
}
F1()

function F3() {
	var d = 100
	return function () {
		console.log(d)
	}
}
var f3 = F3()
var d = 200
f3()
function F4(fn) {
	var a = 200
	fn()
}
F2(f1)