//join() 
var arr = ['a', 'b', 'c'];
console.log(arr.join('/'), arr);// a/b/c ['a', 'b', 'c'];

//push()  pop()  会改变原数组
var brr = [1, 2, 3];
brr.push(4);//将参数逐个添加到数组末尾
console.log(brr); // [1, 2, 3, 4]
brr.pop();//移除数组最后一项
console.log(brr);//[1, 2, 3]

//shift() unshift()  会改变原数组
var crr = ['d', 'e', 'f'];
crr.shift();//移除数组第一项
console.log(crr);//['e', 'f']
crr.unshift('dd','ee');//将参数逐个添加到数组前端
console.log(crr);//['dd', 'ee', 'e', 'f']

//reverse()  将数组反序
var drr = [2, 3, 4, 5];
drr.reverse();  //会改变原数组
console.log(drr);//[5, 4, 3, 2, 1]

//sort() 默认情况下 升序排列 但是此方法会把数组每个项转成string后比较 所以会出现 2 > 11的情况
var err = [2, 11, 22, 33];
err.sort();
console.log(err);//[11, 2, 22, 33]

//sort()可以接收一个比较函数作为参数  会改变原数组
function compare(val1,val2){
	if(val1 < val2){
		return -1;
	}else if(val1 > val2){
		return 1;
	}else{
		return 0;
	}
}//返回 0 -1 不交换位置 返回1交换
err.sort(compare);
console.log(err);//[2, 11, 22, 33]

//concat()
var frr = ['x', 'y', 'z'];
frr1 = frr.concat('a', 'b');
console.log(frr1);//['x', 'y', 'z', 'a', 'b']

//slice() 基于当前数组中的一个或多个项创建一个新数组 接收一个或两个参数 即要返回项的起始和结束位置 在只有一个参数的情况下 slice方法返回从该参数指定位置开始到末尾所有项
var grr = [1, 2, 3, 4];
var grr1 = grr.slice(2);
console.log(grr1);//[3 ,4]
var grr2 = grr.slice(2, 5);//[3,4]

//splice()  会改变原数组
//删除 两个参数 要删除的开始位置和要删除的项数
var hrr = ['a', '1', 'b', '2'];
hrr.splice(1, 2);
console.log(hrr);//['a', '2']

//插入 三个参数 起始位置、0删除的项数、要插入的项
hrr.splice(1, 0, 'x', 'y');
console.log(hrr);//['a', 'x', 'y', '2']

//替换 起始位置 要删除的项数 要插入的项
hrr.splice(1, 2, 'z','3');
console.log(hrr);//['a', 'z', '3', '2']

//indexOf()  lastIndexOf()
var irr = ['a' , 1, 'x', 2];
var index = irr.indexOf('x');//从前往后查找
var lastIndex = irr.lastIndexOf('x');//从后往前
console.log(index);//2
console.log(lastIndex);//2

//every() 给数组每一项运行给定函数 如果该函数对每一项都返回true 则返回true
var jrr = [1, 2, 3, 4, 5];
var isTrue = jrr.every((i) => {
	return i > 1
})
console.log(isTrue);//false

//filter() 对数组中每一项运行给定函数 返回true的项组成的数组
var newArr = jrr.filter((i) => {
	return i > 3;
})
console.log(newArr);//[4, 5]

//forEach() 与for循环数组一样
jrr.forEach((i) => { //常用
	console.log(i);//1 2 3 4 5
})

//map() 对数组每一项给定运行函数 返回每次函数调用的结果组成的函数
var newJrr = jrr.map((i) => {
	return ++i;
})
console.log(newJrr);//[2, 3, 4, 5, 6]

//some() 对数组每一项给定运行函数 如果该函数对任一项返回true 则返回true
var flag = jrr.some((i) => {//常用
	return i > 3;
})
console.log(flag);//true