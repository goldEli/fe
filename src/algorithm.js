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
    const stack = arr
    const result = []
    while (stack.length > 0) {
        const pop = stack.pop()
        if (Array.isArray(pop)) {
            stack.push(...pop)
        } else {
            result.push(pop)
        }
    }
    return [...new Set(result)].sort((a, b) => a - b)
}