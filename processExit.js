// ['room', 'moon', 'cow jumping over the moon'].forEach(function (name) {
// 	process.on('exit', function () {
// 		console.log('Fuck ' + name);
// 	})
// })

process.on('exit', function () {
	console.log('over');
})
process.on('beforeExit', function () {
	console.log('before over');
})