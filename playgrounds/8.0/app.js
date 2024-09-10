function bar() {
	if (foo) {
		foo++;
	}
}

function foo(x) {
	console.log(x);
	bar();
	var y = 10;
	console.log(y);
}