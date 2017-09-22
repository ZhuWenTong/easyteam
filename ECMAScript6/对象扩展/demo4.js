//Object.assign() 用于对象的合并 
var name = {
	name: 'zhangsan'
},
age = {
	age: 18
},
person = Object.assign(name, age);
console.log(person)//{name:'zhangsan',age:18}

//如果只有一个参数
var obj = {
	name: 'lisi'
}
Object.assign(obj) === obj;//true