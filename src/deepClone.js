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

