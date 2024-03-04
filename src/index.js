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
有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣
Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()

instanceof 找到构造函数,只能判断引用类型，无法判断原始类型 比如 true

Array.isArray() 判断是否是函数,只能判断函数

Object.prototype.toString.call() 原型名称转成字符串，通用性最好
 */

/**
可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、<script type="module"> 这几个角度考虑。

1. 最早期js只是用于简单的脚本开发，没有模块化，只有采用 IIFE 立即执行函数来隔绝变量污染。
2. 后面有个 nodejs，实现了 CommonJS 模块化
3. 由于 CommonJS 是同步加载，不能用于浏览器，后面又推出了 AMD CMD
4. UMD 适配多种模块化
5. 由于 模块化规范太多了，所以js推出了 ES Module 来统一模块化规范
6. <script type="module"> 让浏览器支持 ES Module
 */


/**
关于 const 和 let 声明的变量不在 window 上

早期使用var 由于都挂在到全局 很容易被污染
所以新推出了 const let 不会挂载到 window，而是会创建私有的作用域
 */


/**

以下代码打印什么
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();

答案：
ƒ b(){
    b = 20;
    console.log(b); 
}
1. 立即执行函数作用域中 声明了 b = function 
2. function b 是常量 不能被修改，严格模式下会报错，非严格模式下 默认失败

简单改造下代码，使之分别打印 10 和 20。
var b = 10;
(function b(){
    b = 20;
    console.log(window.b); 
})();

var b = 10;
(function b(){
    var b = 20;
    console.log(b); 
})();

*/

/**

var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()

打印如下：

undefined、10 、20

立即执行函数作用域中，var a, 变量提升 此时为 undefined, 


var a = 10;
(function () {
    console.log(a)         // undefined
    a = 5                  // 立即执行函数中的a赋值为5
    console.log(window.a)  // 全局a 为10
    var a = 20;            // 立即执行函数中的a赋值为10 
    console.log(a)         //  立即执行函数作用域中的a为20
})()
 */



/**
使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
sort 转成 utf-16 进制排序
 */
