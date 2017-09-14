//属性遍历
//for...in
//Object.keys(obj)//返回一个数组
//Object.getOwnPropertyNames(obj) //返回数组
//Obj.getOwnPropertySymbols(obj) //数组 包含对象所有Symbol属性
//Reflect.ownKeys(obj) //array 包含自身所有属性
var key = Symbol('weight');
var obj = {
	name: 'zhangsan',
	age: 20,
	[key]: 60
}

for(var key in obj){
	console.log(key); //name age
}

var keys1 = Object.keys(obj);
console.log(keys1);// ['name', 'age']

var keys2 = Object.getOwnPropertyNames(obj);
console.log(keys2)// ['name', 'age']

var keys3 = Object.getOwnPropertySymbols(obj);
console.log(keys3) //[Symbol(weight)]

var keys4 = Reflect.ownKeys(obj);
console.log(keys4); // ['name', 'age', Symbol(weight)]