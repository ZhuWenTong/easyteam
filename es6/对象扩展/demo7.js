//Object.keys()
//Object.values() //array 对象自身的所有可遍历属性的键值
//Object.entries() //属性的键值对数组

var obj = {
	name: 'zhangsan',
	age: 20
}

var value = Object.values(obj)
console.log(value)//['zhangsan', 20]

var obj1 = Object.create({}, {p:
  {
    value: 42,
    enumerable: true
  }
});
var value2 = Object.values(obj1);
console.log(value2);//[42]

var value3 = Object.entries(obj);
console.log(value3);// [['name', 'zhangsan'], ['age', 20]]