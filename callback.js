const obj = {
	init(...arr){
		console.log(arr);
		var fn = arr[0],
			name = arr[1];
		fn(name);
	},
	param(name){
		console.log(name);//zwt
	}
}
obj.init(obj.param,'zwt');
//eg: 获取数据getData(封装好的函数)时标识丢失 需在此调用登录函数login(封装好)获取该标识 
//判断标识丢失 -> 将自身getData作为参数及获取数据需要的参数传入login中 -> login获取标识后即可调用传进来的getData.
