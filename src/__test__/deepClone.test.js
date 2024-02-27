import { describe, test, expect } from "vitest"
import { deepClone } from "../deepClone";

describe('deep clone', () => {

    test('base', () => {

        const obj = { a: {}, b: [], c: 1 }
        const newObj = deepClone(obj)

        console.log("====", obj, newObj)
        expect(newObj === obj).toBe(false)
        expect(newObj.c === obj.c).toBe(true)
        expect(newObj.a === obj.a).toBe(false)
        expect(newObj.b === obj.b).toBe(false)
    });

    test('obj', () => {

        const obj = { a: 1, b: { c: {}, d: 1 } }
        const newObj = deepClone(obj)

        expect(newObj === obj).toBe(false)
        expect(newObj.b.c === obj.b.c).toBe(false)
        expect(newObj.b.d === obj.b.d).toBe(true)
    });


    test('array', () => {
        const obj = { a: 1, b: { c: [], d: 1 } }
        const newObj = deepClone(obj)
        expect(newObj.b.c === obj.b.c).toBe(false)

    });


    test('loop nest', () => {
        let g = {h: {}}
        const obj = { b: { f: g } }
        g.h = obj.b
        const newObj = deepClone(obj)
        expect(newObj.b.f === obj.b.f).toBe(false)
    });
});