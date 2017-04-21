const multer = require('koa-multer'),
  upload = multer({ dest: 'uploads/' });
  fs = require('fs');

/**
 * 获取文件上传页面
 */
const getFilePage = async (ctx, next) => {
  ctx.response.body = `<h1>File Upload Page</h1>
    <form action="/file" method="post",  enctype="multipart/form-data">
        <input name="avatar" type="file">
        <input type="submit" value="Submit">
    </form>`;
};

/**
 * 文件上传
 */
const fileUpload = async (ctx, next) => {
  console.log(ctx.request.file);
  // console.log(ctx.request.body);
  ctx.response.body = '上传成功';
};


module.exports = router => {

  router.get('/file', getFilePage);

  router.post('/file', upload.single('avater'), fileUpload)
}