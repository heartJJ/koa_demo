class wareHouse {

  static async getList (conn) {
     const arr = await conn.query('select * from ckb');
     return {wareHouse: arr[0]};     
  }
}

module.exports = wareHouse;