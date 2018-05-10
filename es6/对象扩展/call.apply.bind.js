// call() apply() bind() 都是用来重定义this对象
let obj = {
    name: 'zhangsan',
    age: 20,
    speak() {
        console.log(this, this.name, this.age);
    }
}

obj.speak(); // obj, zhangsan, 20

let man = {
        name: 'lisi',
        age: 22
    },
    woman = {
        name: 'cuihua',
        age: 18
    };
// 对象man, lisi, 22 
obj.speak.call(man);
obj.speak.apply(man);
obj.speak.bind(man)();
// bind() 和call() apply() 区别在于bind()返回一个新的函数

//call() apply() bind() 传参区别
let demo = {
	do(a, b) {
		console.log(this, this.name, this.age, a, b);
	}
}

demo.do.call(woman, 'call', 'call'); //对象woman, cuihuam, 18, call, call
demo.do.apply(woman, ['apply', 'apply']); //对象woman, cuihuam, 18, apply, apply
demo.do.bind(woman, 'bind', 'bind')(); //对象woman, cuihua, 18, bind, bind

//第一个参数都是this的指向对象
//call() 的参数直接用逗号隔开
//apply() 的参数用的数组
//bind() 的参数形式和call()一致 需要调用

//父类
function Common(name, age) {
    this.name = name;
    this.age = age;
}

Common.prototype.speak = function() {
    console.log(this.name, this.age);
}
//子类
function Person(name, age, className) {
    //Common.call(this, name, age);
    //Common.apply(this, [name, age]);
    Common.bind(this, name, age)();
    this.className = className;
}
//继承 
Person.prototype = Object.create(Common.prototype);
Person.prototype.constructor = Person;

Person.prototype.speak = function() {
    console.log(this.name, this.age, this.className);
}

var lisi = new Person('lisi', '20', 'A').speak();