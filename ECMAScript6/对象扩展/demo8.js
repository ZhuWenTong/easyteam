//对象扩展运算符
const [a,...b] = [1, 2, 3];
console.log(a,b);// 1 [2,3]

//解构赋值
let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x, y, z);
//x 1
//y 2
//z {a: 3,b: 4}
//
//解构赋值不会拷贝继承自原型对象的属性
var obj1 = {
	a: 1
},
obj2 ={
	b: 2
};
obj2.__proto__ = obj1;
var {...obj3} = obj2;
console.log(obj3)//{b: 2}

//扩展运算符
var person = {
	name: 'zhangsan',
	age: 18
},
man = {...person};
console.log(man);//{name: 'zhangsan', age: 18}
//等同于 man = Object.assign({}, person)