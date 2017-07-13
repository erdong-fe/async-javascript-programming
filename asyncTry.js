try{
	setTimeout(function () {
		throw new Error('Catch me if you can');
	}, 0);
	console.log('after setTimeout');
}catch(e){
	console.log('err');
	console.eror(e);
}