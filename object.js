var a = [{
	id: 1,
	name: 1
}, {
	id: 2,
	name: 2
}, {
	id: 3,
	name: 4
}];
var result = a.find((a, b, c) => {
	if (a.id == 3) {
		return a;
	}
});
console.info(result);

result = a.filter((a, b, c) => {
	if (a.id == 2) {
		return a;
	}
});
console.info(result[0]);

a.forEach((a, b, c) => {
	if (a.id == 3) {
		result = a;
		return;
	}
});

console.info(result);

a.map((a, b, c) => {
	if (a.id == 2) {
		result = a;
		return;
	}
});
console.log(result);

a.some((a) => {
	if (a.id == 3) {
		result = a;
		return;
	}
});

console.log(result);

var b = a.entries(),
	c;
while (!(c = b.next()).done) {
	if (c.id == 3) {
		result = c;
		break;
	}
}
console.log(result);

//根据对象数组的属性 改变属性值
var obj = [{ "name": "xiaoming" }, { "name": "" }, { "name": "zhangsan" }];
for (var key in obj) {
    if (obj[key]["name"] == "") {

        obj[key]["name"] = "0";
    }
}
console.dir(obj);