//对象的每个属性都有一个描述对象(Descriptor) 用来控制该属性的行为 
//Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
let obj = {
	name: 'zhangsan',
	age: 18
}
var descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor)//{value: 'zhangsan',writable: true,enumeable: true,configurable: true}
//描述对象的enumerable属性称为可枚举性 如果为false 就表示某些操作会忽略当前属性
//
//有四个操作会忽略enumerable为false的属性
//for...in循环 只遍历对象自身的和继承的可枚举属性
//Object.keys() 返回对象自身的所有可枚举属性的键名
//JSON.stringify() 只串行化对象自身的可枚举的属性
//Object.assign() 只拷贝对象自身的可枚举属性