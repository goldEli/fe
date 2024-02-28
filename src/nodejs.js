/**
介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

npm install 查找 package.json 安装对应模块，查看 package.lock 查找版本 没有就用 package.json 版本

nodemodule 对应一个树，这种会导致很多重复的包，所以需要将 树形结构拍平 并去重
 */

/**
 * 说说浏览器和 Node 事件循环的区别
 
浏览器：
1. 有宏任务队列 比如setTimeout ，微任务队列 比如promise
2. 当执行栈清空后，微任务队列排队执行，直至清空后,执行下一个宏任务

Node 事件循环

node 事件循环有6个阶段, node v11版本以下与浏览器执行顺序和浏览器相反的，node v11以上和浏览器执行顺序相同

 */