/**
javascript 继承

js 通过原型链的方式实现继承

实例通过 __proto__ 可以访问到原型，原型通过 __proto__ 访问原型的原型,  直到返回null,形成原型链达到继承的目的

实例通过构造函数生成，构造函数 prototype 访问原型

原型的 constructor 可以访问到构造函数
 */

/**
new
1. 创建一个实例
2. 构造函数执行 并绑定this 为实例
3. 实例__proto__ 指向 构造函数的原型
 */

export function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype)
    fn.apply(obj, args)
    obj.__proto__ = fn.prototype
    return obj
}

