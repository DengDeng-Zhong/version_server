//设置响应头的中间件
module.exports = async(ctx, next) => {
    const contentType = 'application/json; charset=utf-8'
    ctx.set('Content-Type',contentType)
    //================ 跨域的响应头设置 start =========================
    ctx.set("Access-Control-Allow-Origin","*")
    ctx.set('Access-Control-Allow-Methods',"OPTIONS,GET,PUT,POST,DELETE")
    //================ 跨域的响应头设置 end  =======================
    await next()
}