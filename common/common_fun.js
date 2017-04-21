const pool = require('./mysql2_connect.js');

exports.wrapHandle = fn => {
  return async (ctx, next) => {
    const conn = await pool.getConnection(),
      res = await fn.apply(this, [ctx, next, conn]);
    ctx.response.body = {
      Code: 0,
      Message: '操作成功',
      Result: res
    };
    conn.release(); 
  }
};