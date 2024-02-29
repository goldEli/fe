/**
 * 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
 * 
html 会解析成 dom, css 会解析成 cssom, cssom 和 dom 会生成 renderTGree
renderTree 有了之后就可以计算出 元素的大小和位置然后绘制到页面上

Repaint 不会影响布局,比如颜色调整
Reflow 会影响布局,比如大小位置调整

reflow repaint 都会导致性能问题，特别是 reflow，比如大小改变会导致自身和周围元素的位置发生改变

所以在实际开发中应该尽量避免 reflow  和 repaint

 
避免频繁的修改元素大小 位置 
1. 比如用 transform 替代 position top left
2. 使用 createDocumentFragment 创造节点，一次性挂载
3. style 多次修改合并 一次性赋值
4. 避免表格布局

 */

/**
介绍下 BFC 及其应用

Block Formatting Context，创建一个封闭的空间，外面不会影响里面 里面不会影响外面。
可以解决一些跟预期不符合的问题，比如 
1. 解决 margin 重叠问题
2. float 导致父级高度为0

触发bfc 常用方法
1. overflow hidden
2. position fixed absolute relative
3. display flex
 */
