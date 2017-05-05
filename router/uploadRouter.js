const {diskStore, memoryStore} = require('../common/form_data_parse.js'),
  fs = require('fs'),
  xlsx =  require('node-xlsx');

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

const fileDownLoad = (ctx, next) => {
 const data = [
    ['三亚湾', '海棠湾', '亚龙湾', '空搜', '大东海'], 
    ['三亚京润珍珠主题酒店', '三亚国光豪生度假酒店', '三亚泥宿艺术酒店', '三亚海豚湾主题酒店', '三亚半山半岛洲际度假酒店'], 
    ['三亚国光豪生度假酒店', '三亚京润珍珠主题酒店', '三亚海豚湾主题酒店', '三亚泥宿艺术酒店', '三亚半山半岛洲际度假酒店'], 
    ['三亚京润珍珠主题酒店', '三亚国光豪生度假酒店', '三亚泥宿艺术酒店', '三亚海豚湾主题酒店', '三亚半山半岛洲际度假酒店']
  ];
  const buffer = xlsx.build([{name: 'mySheetName', data: data}]); // Returns a buffer
  ctx.set('Content-disposition','attachment;filename= test.xlsx');
  ctx.set('Content-Type','application/vnd.ms-excel');
  ctx.body = buffer;
}


module.exports = router => {

  router.get('/form', getFilePage);

  router.post('/upload', upload.single('logo'), uploadFile);

  router.get('/download', fileDownLoad);
}