//es6 对象模板 通过class关键字 定义类
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	speak(){
		return `${this.name}, ${this.age}`;
	}
}
var zhangsan = new Person('zhangsan', 20);
console.log(zhangsan.speak());//'zhangsan, 20'

//es5写法
function People(name, age){
	this.name = name;
	this.age = age;
}
People.prototype.speak = function (){
	return `${this.name}, ${this.age}`;
}

var lisi = new People('lisi', 18);
console.log(lisi.speak());//'lisi, 18'