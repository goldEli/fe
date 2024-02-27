

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
 * 手写 new
 */