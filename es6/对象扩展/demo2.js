var obj = {};
//定义对象属性
obj.name = 'zhangsan';
obj['a' + 'ge'] = 20;
console.log(obj);

var value = 'sex';
//将表达式放在方括号内 
var obj1 = {
	[value]: {
		name: 11
	}
}
console.log(obj1)

//表达式可以用于定义方法名
var obj2 = {
	['f' + 'n']() {
		console.log('fn')
	}
}
obj2.fn();//fn