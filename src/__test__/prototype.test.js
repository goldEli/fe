import { describe, test, expect } from "vitest"
import "../this"

describe('prototype', () => {
    test('base', () => {

        function Foo() {
            this.name = 'foo'
        }
        Foo.prototype.say = function () {
            return this.name
        }

        const foo = new Foo()

        expect(foo.__proto__ === Foo.prototype).toBe(true)
        expect(Foo.prototype.constructor === Foo).toBe(true)
        expect(Foo.__proto__ === Function.prototype).toBe(true)
        expect(Foo.prototype.__proto__ === Object.prototype).toBe(true)
        expect(Function.prototype.__proto__ === Object.prototype).toBe(true)
        expect(Object.__proto__ === Function.prototype).toBe(true)
        expect(Object.prototype.__proto__ === null).toBe(true)


    })
});