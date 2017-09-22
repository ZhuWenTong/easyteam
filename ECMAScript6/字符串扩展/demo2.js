//includes() 返回布尔值,表示是否找到了参数字符串
//startsWith() 返回布尔值,表示参数字符串是否在原字符串头部
//endsWith() 返回布尔值,表示参数字符串是否在原字符串尾部
let str = 'Hello World!',
	test1 = str.startsWith('Hello'),
	test2 = str.endsWith('World!'),
	test3 = str.includes('l');
console.log(test1,test2,test3);//true,true,true
//支持第二个参数 表示搜索的位置
let test11 = str.startsWith('World',6),
	test22 = str.endsWith('Hello',5),
	test33 = str.includes('Hello',6);
console.log(test11,test22,test33);//true,true,false