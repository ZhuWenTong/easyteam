class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	speak(){
		console.log(this.name, this.age);
	}
}

class Man extends Person {// Man 继承了 Peoson
	constructor(name, age, sex){
		super();
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	gender(){
		console.log(this.sex)
	}
}

var zhangsan = new Man('zhangsan', 20, 'man');
zhangsan.speak();//zhangsan 20
zhangsan.gender();//man