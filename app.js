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

const WebSocket = require('ws')
// 创建WebSocket服务端的对象,绑定的端口号是8084
const wss = new WebSocket.Server({
  port: 8084
})
// 对客户端的连接事件进行监听
wss.on('connection', client => {
  console.log('有一个客户端连接进来了..')
  // 对客户端的连接对象进行message事件的监听
  // msg: 由客户端发给服务器的数据
  client.on('message', msg => {
    console.log('客户端发送数据给服务端的了: '+msg)
    client.send('hello socket from Server')
  })
})