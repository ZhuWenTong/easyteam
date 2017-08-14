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
var result = a.find(function(a, b, c) {
    if (a.id == 3) {
        return a;
    }
});
console.info(result);

result = a.filter(function(a, b, c) {
    if (a.id == 2) {
        return a;
    }
});
console.info(result[0]);

a.forEach(function(a, b, c) {
    if (a.id == 3) {
        result = a;
        return;
    }
});

console.info(result);

a.map(function(a, b, c) {
    if (a.id == 2) {
        result = a;
        return;
    }
});
console.log(result);

a.some(function(a) {
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