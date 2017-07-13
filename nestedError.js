setTimeout(function A() {
	setTimeout(function B() {
		setTimeout(function C() {
			throw new Error('Trouble Happened');
		}, 0);
	}, 0);
}, 0)