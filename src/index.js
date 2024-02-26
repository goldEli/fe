/**
 * link
 */
class LinkNode {
    value;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

class Link {

    head;

    append(value) {

        if (!this.head) {
            this.head = new LinkNode(value);
            return;
        }

        // this.head.next = new LinkNode(value)
        let current = this.head;

        while (current) {
            if (current.next === null) {
                current.next = new LinkNode(value);
                break;
            }
            current = current.next;
        }

    }

    display() {

    }

}

/**
 
1. 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
 
key 就是元素的唯一身份，在 diff 的时候, 才知道哪一个移动到了哪里，哪一个被删除了
基于key创建map，用于后续的对比,移动 删除等操作
 
2. ['1', '2', '3'].map(parseInt) what & why ?
 
parseInt 有两个参数，第二个参数是基数 10 表示10进制
 
 */

/**
 
3. 什么是防抖和节流？有什么区别？如何实现？
 
防抖一般用于实时搜索，n秒后执行，如果在执行前再次触发，则重新计时
节流一般用于刷新按钮的触发频率防止多次点击，设置的时间间隔内只会触发一次，不管你点了几次
 */


function debounce(interval, cb) {
    let timer
    return function () {
        clearTimeout(timer)
        setTimeout(() => {
            cb.apply(this, arguments)
        }, [interval])
    }

}

function throttle(interval, cb) {
    let canRun = true
    return function () {
        if (!canRun) return
        canRun = false
        cb.apply(this, arguments)
        setTimeout(() => {
            canRun = true
        }, [interval])
    }
}

/**
介绍下 Set、Map、WeakSet 和 WeakMap 的区别
 
Set 类似于数据 我有时会用来去重
 
Map 储存key value 相对于 Object key类型更多 提供了一个工具方法 比如 set has remove 方便操作
 
WeakSet WeakMap 弱引用, 避免内存泄漏  
 
WeakMap 只能用对象作为key ，null除外，不计入垃圾回收
 */

/**
 深克隆
*/


function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' || Array.isArray(obj)
}

const weakMap = new WeakMap()
export function deepClone(obj) {
    if (isObject(obj)) {
        const newObj = Array.isArray(obj) ? [] : {}
        if (weakMap.has(obj)) {
            return weakMap.get(obj)
        }
        weakMap.set(obj, newObj)
        for (const key in obj) {
            const item = obj[key]
            newObj[key] = deepClone(item)
        }
        return newObj
    }
    return obj
}


/**

介绍下深度优先遍历和广度优先遍历，如何实现？

遍历树

深度优先 递归
广度优先 迭代
 */


export function deepFirst(nodes, arr = []) {
    if (nodes?.length > 0) {
        nodes.forEach(node => {
            deepFirst(node.children, arr)
            arr.push(node.id)
        });
    }

    return arr
}

export function breadthFirst(nodes) {

    const arr = []
    const queue = nodes

    while (queue?.length > 0) {
        const node = queue.shift()
        arr.push(node.id)
        if (node.children?.length > 0) {
            queue.push(...node.children)
        }

    }

    return arr
}


/**
javascript 继承

js 通过原型链的方式实现继承

实例通过 __proto__ 可以访问到原型，原型通过 __proto__ 访问原型的原型,  直到返回null,形成原型链达到继承的目的

实例通过构造函数生成，构造函数 prototype 访问原型

原型的 constructor 可以访问到构造函数
 */

/**
 this 的理解

 谁调用指向谁，运行时确认，正是这种机制，this的指向很难在代码编写的时候确定，导致bug 产生，es6 推出了箭头函数 箭头函数没有this，避免了this的一些问题，让代码编写时更好的确认this的指向
  
 */


/**
 手写 bind

 */

Function.prototype.myBind = function (context) {
    const fn = this
    return (...args) => {
        return fn.apply(context, args)
    }
}




/**
 手写 call apply

 */


/**
 setTimeout、Promise、Async/Await 的区别

 */

/**

 */





