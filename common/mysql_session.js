const session = require('koa-session-minimal'), // sesison中间件，可选其他
  mysqlSession = require('koa-mysql-session'); // 


const store = new mysqlSession({
  user: 'root',
  password: '123456',
  database: 'hanjj',
  host: '127.0.0.1'
});

const cookie = {
  maxAge: 1000*60*1,
  path: '/',
  httpOnly: true,
  overwrite: true
};

module.exports = (app) => {
  app.use(session({
    key: 'SESSION_ID',
    store: store,
    cookie: cookie
  }));
};