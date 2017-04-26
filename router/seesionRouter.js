/**
 * 设置session
 * @param {*} ctx 
 * @param {*} next 
 */
const setSession = (ctx, next) => {
  ctx.session = {
    user_id: Math.random().toString(36).substr(2),
    count: 0
  };
  ctx.body = ctx.session;
};

/**
 * 获取session
 * @param {*} ctx 
 * @param {*} next 
 */
const getSession = (ctx, next) => {
  ctx.session.count = ctx.session.count + 1;
  ctx.body = ctx.session;
};


module.exports = router => {

  router.get('/session/get', getSession);

  router.get('/session/set', setSession);
}