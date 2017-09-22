// 默认值
function fn(x,y = 'world'){
	console.log(x,y);
}
fn('Hello');// Hello world
fn('Hello','es6');//Hello es6
fn('Hello','')//Hello