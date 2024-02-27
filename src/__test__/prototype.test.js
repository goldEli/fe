import { describe, test, expect } from "vitest"
import "../this"
import { myNew } from "../prototype";

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

    test('new', () => {
        function Foo(age) {
            this.name = 'foo'
            this.age = age
        }

        Foo.prototype.say = function () {
            return this.name
        }
        Foo.prototype.myAge = function () {
            return this.age
        }

        const foo = new Foo(18)

        expect(foo.say()).toBe('foo')
        expect(foo.myAge()).toBe(18)

        const foo1 = myNew(Foo, 18)

        expect(foo1.say()).toBe('foo')
        expect(foo1.myAge()).toBe(18)

    });
});