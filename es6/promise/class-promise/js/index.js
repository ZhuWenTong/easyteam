'use strict';
onload = function() {
	new Index();
}
class Test extends Common{
	constructor() {
		super();
	}
	test(obj) {
		console.log(obj)
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({name: 'zhangsan', age: 20})
			}, 1000)
		})
	}
}
class Index extends Test {
	constructor() {
		super();
		this.init();
	}
	init() {
		new Common().speak('a');
		let self = this;
		this.myPromise();
		this.speak('index');
		document.querySelector('.box').onclick = function() {
			self.myPromise();
		}
	}
	myPromise() {
		let self = this;
		let p = new Promise((resolve, reject) => {
			resolve(self)
		})
		p.then(this.test).then((peo) => {
			//let obj = this.test();
			console.log(peo)
		}).catch(err => console.log(err))
	}
}