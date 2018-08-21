/**
 * @author zwt
 * @description jsDoc的学习
 * 
 */

/**
 * @description 这是一个构造函数
 * @example
 * var zhangsan = new Person('zhangsan').speak();
 * @param {String} name
 * @constructor
 */
function Person(name, age) {
    /**
     * @property {String} name 名字
     * @property {Number} age 年龄
     */
    this.name = name;
    this.age = age;
    /**
     * @constructs
     * @description 得到名字
     * @function speak方法
     */
    this.speak = function() {
        console.log(this.name)
    }
}

var zhangsan = new Person('zhangsan').speak();
/**
 * @abstract
 * @description Man 继承 Person
 *
 */
function Man(sex) {
    this.sex = sex;
}
Man.prototype = new Person();
var lisi = new Man();
lisi.name = 'lisi';
lisi.speak();


///**
// * @type {IDString}
// * @type {ClassString}
// * @type {TagString}
// * @type {AttrString}
// * @type {AttrValueString}
// * @type {cssPropertyString}
// * @type {cssPropertyValueString}
// * @type {HTMLString}
// * @type {CSSString}
// * @type {URLString}
// * @type {ImageURIString}
// * @type {JSURIString}
// * @type {CSSURIString}
// * @type {MultimediaString}
// * @type {ColorString}
// * @type {FontString}
// * @type {EventString}
// */