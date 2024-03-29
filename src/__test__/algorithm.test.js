import { describe, test, expect } from "vitest"
import { breadthFirst, deepFirst, fibonacci, fibonacci1, fibonacci2, flat, flatten } from "../algorithm";

const tree = {
    id: 0,
    children: [
        {
            id: 1, children: [
                { id: 3, children: [] },
            ]
        },
        {
            id: 2, children: [

                { id: 4, children: [] },
            ]
        },
    ]
}
describe('algorithm', () => {

    test('deepFirst', () => {

        expect(deepFirst([tree])).toEqual([3, 1, 4, 2, 0])

    });

    test('breadthFirst', () => {

        expect(breadthFirst([tree])).toEqual([0, 1, 2, 3, 4])
    });

    test('编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组', () => {
        var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

        expect(flat(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    })

    test("斐波那契数列", () => {
        expect(fibonacci(10)).toEqual(55)
        expect(fibonacci1(10)).toEqual(55)
        expect(fibonacci2(10)).toEqual(55)
    })

    test("flatten", () => {
        const arr = [1, 2, 3, [[4, 5], 6, [7, 8, 9]], 10]
        expect(flatten(arr)).toStrictEqual([
            1,
            2,
            3,
            10,
            6,
            4,
            5,
            7,
            8,
            9,
        ])
    })

});