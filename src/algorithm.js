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

