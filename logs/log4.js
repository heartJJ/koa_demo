/**
 * log4 模块还支持 邮件通知，可配合 nodemailer 使用
 */

'use strict'
const path = require('path'),
  fs = require('fs'),
  log4js = require('koa-log4'),
  logDir = path.join(__dirname, 'logs'),
  debug = require('debug')('debug');

/* 生成 log 目录  */
// try {
//   fs.mkdirSync(logDir);
// } catch (err) {
//   debug(err);
//   process.exit();
// }

//根据log 配置文件(log4js.json)配置日志文件
log4js.configure(path.join(__dirname, 'log4.json'), { cwd: logDir })
//注册日志： 日志名（前缀）startup
const logger = log4js.getLogger('startup')
//输入日志
logger.info('logs config finished!')