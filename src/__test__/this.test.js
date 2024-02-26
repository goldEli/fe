import { describe, test, expect } from "vitest"
import "../index"

describe('this', () => {
    test('bind', () => {

        function Foo() {
            this.name = 'foo'
        }
        Foo.prototype.say = function () {
            return this.name
        }

        const foo = new Foo()

        expect(foo.__proto__).toBe(Foo.prototype)

        expect(Foo.prototype.__proto__ === Object.prototype).toBe(true)
        expect(Foo.__proto__ === Function.prototype).toBe(true)

        expect(Object.prototype.__proto__ === null).toBe(true)
        expect(Object.prototype.constructor === Object).toBe(true)
        expect(Function.prototype.__proto__ === Object.prototype).toBe(true)

        expect(foo.__proto__ === Foo.prototype).toBe(true)
        expect(Foo.prototype.say.__proto__ === Function.prototype).toBe(true)
        // expect(foo.say.myBind === Foo.prototype.myBind).toBe(true)
        expect(Foo.prototype.__proto__.myBind === Object.prototype.myBind).toBe(true)
        expect(foo.say.bind.__proto__ === Function.prototype).toBe(true)
        expect(Function.prototype.myBind === foo.say.myBind).toBe(true)


        expect(foo.say()).toBe('foo')

        const bar = { name: "bar" }

        expect(foo.say.bind(bar)()).toBe('bar')
        expect(foo.say.myBind(bar)()).toBe('bar')
    })
});