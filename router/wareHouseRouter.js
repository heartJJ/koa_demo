const {wrapHandle} = require('../common/common_fun'),
  wareHouse = require('../service/wareHouseService');

const getWareHouseList = wrapHandle(async (ctx, next, conn) => {
  // const arr = await conn.query('select * from ckb');
  // return {wareHouse: arr[0]};
  return wareHouse.getList(conn);
});

module.exports = router => {
  router.get('/wareHouse', getWareHouseList);

}