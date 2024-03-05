/**
 * 谈谈你对TCP三次握手和四次挥手的理解

1. 三次握手确保客户端和服务端都收发的能力
2. 四次挥手确保客户端和服务端数据收收发完了

服务端你在吗
客户端我在
好的

第一次握手: 服务端收到后 确认客户端的发信能力 
第二次握手：客户端收到后 确认服务端的发信和收信能力
第三次握手：服务端收到后 确认客户端的收信能力

客户端：服务端我要关了
服务端：好的你关吧
服务端：我也要关了
客户端：你关吧


 */

/**
cookie 和 token 都存放在 header 中，为什么不会劫持 token？

1. cookie 会自动带到每次请求中，钓鱼邮件伪造请求会劫持到cookie
2. token 是通过js手动设置到header中的，所以很难自动被获取
 */

/**
HTTPS 握手过程中，客户端如何验证证书的合法性

浏览器先验证客户端的有效期，再用操作系统内置的根证书对颁发者进行校验，没有通过浏览器则报错
 */

/**
为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

1. 体积小
2. 图片src不会跨域
3. 出题也不会阻塞页面
 */