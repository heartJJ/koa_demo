/**
 * 欢迎页
 * @param {*} ctx 
 * @param {*} next 
 */
const getMainPage = async (ctx, next) => {
  ctx.response.body = '<h1>Hello, koa2!</h1>';
};

/**
 * 登录页
 */
const getLoginPage = async (ctx, next) => {
  ctx.response.body = `<h1>Login Page</h1>
    <form action="/login" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
};

/**
 * 登录验证模拟
 */
const login = async (ctx, next) => {
  const name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  if (name === 'koa' && password === '123456') {
    ctx.response.body = `<h2>登录成功</h2>`;
  } else {
    ctx.response.body = `<h2>用户名或密码错误</2>`;
  }
};

module.exports = router => {

  router.get('/', getMainPage);

  router.get('/login', getLoginPage);

  router.post('/login', login);
}
