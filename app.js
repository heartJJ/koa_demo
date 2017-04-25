// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa'),
  router = require('koa-router')(), // koa-router 返回的是一个函数
  bodyparser = require('koa-bodyparser'),// 加载 Body 解析模块
  logger = require('koa-logger'),
  debug = require('debug')('debug'); 
  app_router = require('./router');// 加载路由 
// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 统一处理错误
app.use(async (ctx, next) => {
  try{
    await next();
  } catch (err) {
    debug(err);
    const status = err.status || 500,
      message = err.message || '服务器错误';
    ctx.body = {
      Code: status,
      Message: message,
      Reuslt: {}
    }
  }
});

// app.on('error', err => {
//   debug('error事件触发，打印错误如下：');
//   debug(arr);
// });

// 打印URL
// app.use(async (ctx, next) => {
//   console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//   await next(); // 调用下一个middleware
// });

// 日志
app.use(logger());
// 解析body
app.use(bodyparser());

// add router middleware:
app.use(router.routes());
// 路由
app_router(router);

// 在端口3000监听:
app.listen(3000);
debug('app started at port 3000...');