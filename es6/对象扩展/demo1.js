var name = 'zhangsan';
var person = {
	name
}
//等同于
var person = {
	name: name
}

//====方法简写====
var obj = {
	fn(){
		console.log(name)
	}
}
//等同于 
var obj = {
	fn: function(){
		console.log(name)
	}
}