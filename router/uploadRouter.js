const {diskStore, memoryStore} = require('../common/form_data_parse.js'),
  fs = require('fs');

const upload = diskStore('./uploads');

/**
 * 获取上传页面
 * @param {*} ctx 
 * @param {*} next 
 */
const getFilePage = async (ctx, next) => {
  await ctx.render('fileUpload/upload', {title: 'File Uplaod Page'});
};

/**
 * 上传文件，存入磁盘
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadFile = (ctx, next) => {
  // console.log(ctx.req.file);
  // console.log(ctx.req.body);
  ctx.response.body = `<h2>操作成功</h2>`;
}

module.exports = router => {

  router.get('/form', getFilePage);

  router.post('/upload', upload.single('logo'), uploadFile);
}