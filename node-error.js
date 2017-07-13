process.on('uncaughtException', (err)=>{

	console.log(`Caught exception: ${err}`);
});

setTimeout(()=>{
	console.log('this will still run.')
}, 500);

notExistFunc();

console.log('this will not run');