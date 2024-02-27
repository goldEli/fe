/**
 * setTimeout、Promise、Async/Await
1. setTimeout 宏任务, 回调放入到宏任务队列中，等执行栈清空后,微任务队列为空，执行
2. Promise、Async/Await 微任务,回调放入到微任务队列中,当执行栈清空后，微任务队列依次进入执行栈执行
3. Promise 传入回调立即执行 .then 才是异步
4. await 后面的函数立即执行，await 下面的代码可以理解为放到了 .then 中

 */

/**
 * Async/Await 如何通过同步的方式实现异步
Async/Await 就行一个自执行的 generate 函数，yield 可以想象成 await
 */

/**
 * 异步考察
 */

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');

/**
 * 手写promise
 */