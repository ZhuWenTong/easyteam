const obj = {
    init(...arr) {
        console.log(arr);
        var fn = arr[0],
            name = arr[1];
        fn(name);
    },
    param(name) {
        console.log(name); //zwt
    }
}
obj.init(obj.param, 'zwt');
//eg: 获取数据getData(封装好的函数)时标识丢失 需在此调用登录函数login(封装好)获取该标识 
//判断标识丢失 -> 将自身getData作为参数及获取数据需要的参数传入login中 -> login获取标识后即可调用传进来的getData.
/**
 * @description es5写法 flag为false时调用函数b 令标识flag为true 调用函数a 执行flag为true的语句
 * @type {Boolean} flag
 */
var flag = false; 
function a(name, age) {
	if(flag) {
		console.log(name, age);
	} else {
		b(a, name, age);//
	}
}
function b() {
	flag = true;
	var cb = arguments[0],	
		name = arguments[1],
		age = arguments[2];
	cb(name, age);
}
a('zhangsan', 20)