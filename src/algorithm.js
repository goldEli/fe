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
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */

export function flat(arr) {
    // 第一种
    // const stack = arr
    // const result = []
    // while (stack.length > 0) {
    //     const pop = stack.pop()
    //     if (Array.isArray(pop)) {
    //         stack.push(...pop)
    //     } else {
    //         result.push(pop)
    //     }
    // }
    // return [...new Set(result)].sort((a, b) => a - b)
    // 第二种
    return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
}

/**
 * 动态规划
 * 
 * 斐波那契数列
 */

export function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        // 创建一个数组 dp 来保存子问题的解
        const dp = [0, 1];
        for (let i = 2; i <= n; i++) {
            dp.push(dp[i - 1] + dp[i - 2]);
        }
        return dp[n];
    }
}


export function fibonacci1(n) {
    if (n <= 1) {
        return n;
    }
    let dp1 = 0
    let dp2 = 1
    for (let i = 2; i <= n; i++) {
        const temp = dp2
        dp2 = dp1 + dp2
        dp1 = temp
    }
    return dp2

}


export function fibonacci2(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 1
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2)

}

// f(3) = f(2) + f(1) 1+1=2
// f(4) = f(3) + f(2) 2+1=3
// f(5) = f(4) + f(3) 3+2=5

/**
迭代的方式实现 flatten 
 */
export function flatten(arr) {
    const result = []
    const stack = arr

    while (stack.length) {
        const top = stack.shift()
        if (Array.isArray(top)) {
            stack.push(...top)
        } else {
            result.push(top)
        }

    }
    return result
}