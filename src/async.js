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

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');

/**
 * 手写Promise
 * 
 * Promise.all
 * Promise.race
 */

// 使用示例
// const promise = new Promise((resolve, reject) => {
//     resolve(42);
// });

// promise.then(value => {
//     console.log('Success:', value); // 输出 Success: 42
// }).then(() => {
//     console.log('Chain success handler');
// }).then(() => {
//     throw new Error('Custom error');
// }).then(() => {
//     console.log('This should not run');
// }, reason => {
//     console.error('Error:', reason); // 输出 Error: Error: Custom error
// });

class MyPromise {
    constructor(executor) {
        this.value = undefined
        this.state = 'pending'
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {

            const handleFulfilled = () => {
                try {
                    const result = onFulfilled(this.value)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            }

            const handleRejected = () => {
                try {
                    const result = onRejected(this.reason)
                    reject(result)
                } catch (error) {
                    reject(error)
                }
            }

            if (this.state === 'fulfilled') {
                handleFulfilled()
            } else if (this.state === 'rejected') {
                handleRejected()
            } else {
                this.onResolvedCallbacks.push(handleFulfilled)
                this.onRejectedCallbacks.push(handleRejected)
            }


        })
    }


}


// const p1 = new MyPromise((resolve, reject) => {
//     resolve(42);
// });

// p1.then(value => {
//     console.log('Success:', value); // 输出 Success: 42
// }).then(() => {
//     console.log('Chain success handler');
// }).then(() => {
//     throw new Error('Custom error');
// }).then(() => {
//     console.log('This should not run');
// }, reason => {
//     console.error('Error:', reason); // 输出 Error: Error: Custom error
// });

MyPromise.all = (promiseList) => {
    const result = []
    return new MyPromise((resolve, reject) => {
        promiseList.forEach(p => {
            p.then(value => {
                result.push(value)
                if (result.length === promiseList.length) {
                    resolve(result)
                }
            })
        })
    })
}
MyPromise.race = (promiseList) => {
    return new MyPromise((resolve, reject) => {
        promiseList.forEach(p => {
            p.then(value => {
                resolve(value)
            })
        })
    })
}

/**
 * test all and race
 */

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p2');
//     }, 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p3');
//     }, 1100)
// })
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p4');
//     }, 1200)
// })

// Promise.all([p2, p3, p4]).then(results => {
//     console.log("Promise.all", results)
// })

// Promise.race([p2, p3, p4]).then(results => {
//     console.log("Promise.race", results)
// })


// const p2 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p2');
//     }, 1000)
// })

// const p3 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p3');
//     }, 1100)
// })
// const p4 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p4');
//     }, 1200)
// })

// MyPromise.all([p2, p3, p4]).then(results => {
//     console.log("Promise.all", results)
// })

// MyPromise.race([p2, p3, p4]).then(results => {
//     console.log("Promise.race", results)
// })


