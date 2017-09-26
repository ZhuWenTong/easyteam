//charAt方法以单字符字符串的形式返回给定位置的那个字符
//charCodeAt方法返回字符的字符编码
var str = 'hello world';
console.log(str.charAt(4));//'o'
console.log(str.charCodeAt(4));//111

//concat 字符串拼接 或 + 或 `${}${}`

//slice substr substring
//三个方法都接收一或两个参数，第一个指定字符串的开始位置，第二个（如果有的话）表示字符串到哪里结束。
//slice和substring的第二个参数指定的是字符串最后一个字符串后面的位置，而substr的第二个参数指定的则是返回的字符个数。如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。
//这三个方法都不会改变原字符串

console.log(str.slice(6));//'world'
console.log(str.slice(6, 8));//'wo'
console.log(str.slice(0, -1));//'hello worl' 删除最后一个字符

console.log(str.substring(6));//'world'
console.log(str.substring(6, 8));//'wo'

console.log(str.substr(6));//'world'
console.log(str.substr(6, 3));//'wor'

//indexOf方法从字符串的开头向后搜索字符串
//lastIndexOf方法时从字符串的末尾向前搜索字符串，找不到一样返回-1
//第二个参数表示从字符串哪个位置开始搜索

console.log(str.indexOf('l'));//2
console.log(str.lastIndexOf('d'), str.lastIndexOf('o'));//10 7
console.log(str.indexOf('z'), str.lastIndexOf('z'));//'-1 -1'

//trim方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
var str1 = '  hello world  ';
str1 = str1.trim();
console.log(str1);//'hello world'

//toLowerCase toUpperCase
var str2 = 'Hello World';
console.log(str2.toLowerCase());//hello world
console.log(str2.toUpperCase());//HELLO WORLD

//fromCharCode方法是String构造函数的静态方法，这个方法接收一或多个字符编码，然后将他们转换成一个字符串。这是与charCodeAt的反向操作。
console.log(String.fromCharCode(104,101,108,108,111));  //"hello" 

//split() 方法用于把一个字符串分割成字符串数组。
//参数可以是字符串或正则表达式
//如果传入""，可以将字符串的每个值分割成数组
var str3 = 'hello world';
console.log(str3.split(''));//[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(str3.split(' '));//['hello', 'world']
console.log(str.split('').reverse().join(''));//'dlrow olleh'