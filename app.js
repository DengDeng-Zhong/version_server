//服务器文件入口
//1.创建koa的实例对象
const Koa = require('koa')
const app = new Koa()
//2.编写响应函数(中间件)
//ctx上下文,web容器,ctx.request ctx.response
// 绑定第一层中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
// 绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
//3.绑定端口 30000
app.listen(8081)