import { describe, test, expect } from "vitest"
import { breadthFirst, deepFirst } from "../algorithm";

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
describe('loop', () => {

    test('deepFirst', () => {

        expect(deepFirst([tree])).toEqual([3, 1, 4, 2, 0])

    });

    test('breadthFirst', () => {

        expect(breadthFirst([tree])).toEqual([0, 1, 2, 3, 4])
    });


});