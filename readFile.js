var fs = require('fs');
fs.readFile('ffff.txt', function (err, data) {
	if(err) {
		return console.log(err.message);
	};
	console.log(data.toString('utf-8'));
})