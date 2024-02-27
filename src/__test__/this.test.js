import { describe, test, expect } from "vitest"
import "../this"

function Foo() {
    this.name = 'foo'
}
Foo.prototype.say = function (str) {
    if (!str) return this.name
    return this.name + "_" + str
}

const foo = new Foo()
const bar = { name: "bar" }
describe('this', () => {
    test('bind', () => {


        expect(foo.say()).toBe('foo')


        expect(foo.say.bind(bar)('xxx')).toBe('bar_xxx')
        expect(foo.say.bind(bar, 'xxx')()).toBe('bar_xxx')
        expect(foo.say.myBind(bar)()).toBe('bar')
        expect(foo.say.myBind(bar)('xxx')).toBe('bar_xxx')
        expect(foo.say.myBind(bar, 'xxx')()).toBe('bar_xxx')
    })

    test('call', () => {

        expect(foo.say()).toBe('foo')
        expect(foo.say.call(bar)).toBe('bar')
        expect(foo.say.call(bar, 'xxxx')).toBe('bar_xxxx')

        expect(foo.say.myCall(bar)).toBe('bar')
        expect(foo.say.myCall(bar, 'xxxx')).toBe('bar_xxxx')
    });

    test('apply', () => {

        expect(foo.say()).toBe('foo')
        expect(foo.say.apply(bar)).toBe('bar')
        expect(foo.say.apply(bar, ['xxxx'])).toBe('bar_xxxx')

        expect(foo.say.myApply(bar)).toBe('bar')
        expect(foo.say.myApply(bar, ['xxxx'])).toBe('bar_xxxx')
    });
});