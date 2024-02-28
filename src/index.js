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







