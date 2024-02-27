/**
介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

npm install 查找 package.json 安装对应模块，查看 package.lock 查找版本 没有就用 package.json 版本

nodemodule 对应一个树，这种会导致很多重复的包，所以需要将 树形结构拍平 并去重
 */