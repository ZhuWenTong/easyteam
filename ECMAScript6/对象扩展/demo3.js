//函数的name属性 返回函数名
const person = {
    speak() {
        console.log('chinese')
    }
}
console.log(person.speak.name); //speak

//对象使用了取值函数(getter)和存值函数(setter) 则name属性不在该方法上面 而是该方法的属性的描述对象的get和set属性上面 返回值是方法名前加上get 和 set
const obj = {
    get fn() {

    },
    set fn(x) {

    }
}
//obj.fn.name  undefined
const descriptor = Object.getOwnPropertyDescriptor(obj, 'fn');
console.log(descriptor.get.name)
console.log(descriptor.set.name)