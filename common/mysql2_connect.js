const mysql2 = require('mysql2');
const mysql2_promise = require('mysql2/promise');

/**
 * 不使用promise
 */
// const pool = mysql2.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '123456',
//   database        : 'fgrid_copy'
// });

/**
 * 使用 promsie
 */
module.exports = mysql2_promise.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'fgrid_copy'
});

/**
 *  promise的情况下，无法使用 事务
 */
// const test = async () => {
//   const conn = await pool.getConnection();
//   const res = await conn.query('SELECT * from ckb');
//   // console.log(res);
//   conn.release();

// }


/**
 * 非 promise的情况下
 */

// const test = () => {
//   pool.getConnection(function(err, connection) {
//     // Use the connection
//     connection.query('SELECT * from ckb', function (error, results, fields) {
//       // And done with the connection.
//       connection.release();
//       // console.log(results);
//       // Handle error after the release.
//       if (error) throw error;

//       // Don't use the connection here, it has been returned to the pool.
//     });

//     connection.beginTransaction(function(err) {
//       if (err) { throw err; }
//       connection.query('INSERT INTO ckb SET CKMC = ?', '测试1', function (error, results, fields) {
//         if (error) {
//           return connection.rollback(function() {
//             throw error;
//           });
//         }

//         console.log(results);

//         // throw new Error(122312312);
//           connection.commit(function(err) {
//             if (err) {
//               return connection.rollback(function() {
//                 throw err;
//               });
//             }
//             console.log('success!');
//           });
//         });
//       });

//   });
// }

// test()



