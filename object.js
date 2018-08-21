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
var result = a.find((a) => {
    console.log(a)
    if (a.id == 3) {
        return a;
    }
});
console.info(result);

result = a.filter((a) => {
    console.log(a)
    if (a.id == 2) {
        return a;
    }
});
console.info(result[0]);

a.forEach((a) => {
    console.log(a)
    if (a.id == 3) {
        result = a;
        return;
    }
});

console.info(result);

a.map((a) => {
    console.log(a)
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

//将多个对象合并成一个
var obj1 = {
        a: 1
    },
    obj2 = {
        b: 2
    },
    obj3 = {
        c: 3
    };
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj); //{a:1,b:2,c:3}