//合并数组
var arr1 = ['a'],
	arr2 = [1, 2],
	arr3 = ['b'];
var newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);//['a', 1, 2, 'b']
//es5 newArr = arr1.concat(arr2, arr3)


console.log([...'abc']);//['a', 'b', 'c']

//Array.from() 用于将类似数组的对象 可遍历的对象 转为真正的数组
let arrayLike = {
	'0': 'a',
	'1': 'b',
	length: 2
};
let array = Array.from(arrayLike);
console.log(array);//['a', 'b']

//Array.of() 将一组值 转为数组
console.log(Array.of(1, 2, 3));//[1, 2, 3]

//find() 返回一个符合条件的成员 若没有符合的返回undefined
//findIndex()  返回一个符合条件的成员下标 若没有符合的返回-1

var brr = [1, 2, 3, 4, 5];
var isFind = brr.find((i) => {
	return i > 3;
})
console.log(isFind);//4
var isFindIndex = brr.findIndex((i) => {
	return i < 1
})
console.log(isFindIndex);//-1

//fill()
console.log(['a', 'b'].fill(1));//[1, 1]

//entries() 对键值对遍历
//keys() 对键名遍历
//values() 对键值遍历
var crr = ['a', 'b'];
for(var key of crr.keys()){
	console.log(key);//0 1
}
// for(var key of crr.values()){
// 	console.log(key);//'a' 'b'
// }
for(var [key, value] of crr.entries()){
	console.log(key, value);
	//0 'a'
	//1 'b'
}

//includes() 返回布尔值 表示数组是否包含给定的值
[1, 2, 3].includes(2) //true
[1, 2, 3].includes(4) //false
[1, 2, NaN].includes(NaN) //true


//不使用loop生成密集数组
let longArr = [...Array(100).keys()],
	longArr1 = Array.from(Array(100).keys()),
	longArr2 = Object.keys(Array.apply(null,{length:100})),
	longArr3 = Object.keys(Array.from({length: 100}));

// 判断变量是否为数组
Array.isArray([1]) // true
Object.prototype.toString.call([1]) === '[object Array]'; //true

var a = [1,2,3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); //true