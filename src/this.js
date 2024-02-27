

/**
 this 的理解

 this是隐式绑定，谁调用指向谁，运行时确认，特别是是回调函数使用时，this很容易丢失导致bug，所以需要通过bind apply call 显示绑定this
  
 */


/**
 手写 bind

 */

Function.prototype.myBind = function (context, ...argsOuter) {
    const fn = this
    return (...argsInner) => {
        const args = argsInner.length > 0 ? argsInner : argsOuter
        return fn.apply(context, args)
    }
}




/**
 手写 call apply
 */

Function.prototype.myCall = function (context, ...args) {
    const fn = this.bind(context)
    return fn(...args)
}

Function.prototype.myApply = function (context, args = []) {
    const fn = this.bind(context)
    return fn(...args)
}





/**
 * this 考察
 
var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }

person1.show1()               // person1
person1.show1.call(person2)   // person2

person1.show2()               // window
person1.show2.call(person2)   // window 箭头函数没有this

person1.show3()()             // window
person1.show3().call(person2) // person2
person1.show3.call(person2)() // window

person1.show4()()             //person1
person1.show4().call(person2) //person1
person1.show4.call(person2)() //person2
 */