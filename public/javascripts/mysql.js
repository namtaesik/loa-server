const mysql = require("mysql");
let dbconfig = {
  host: "loa-counrycat.com",
  //host: "122.37.101.110",
  port: "3306",
  user: "nts0123",
  password: "q!13468570",
  database: "nts0123",
  multipleStatements: true,
  typeCast: function (field, next) {
    if (field.type == "VAR_STRING") {
      return field.string();
    } else if (field.type === "BIT" && field.length === 1) {
      var bytes = field.buffer();
      return bytes[0] === 1;
    }
    return next();
  },
};
// createConnection 을 한 경우 추후 'conn.connect();' 를 할 필요가없다.
//const conn = mysql.createConnection(dbconfig);

// pool로 관리.
const pool = mysql.createPool(dbconfig);
const getConnectionPool = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) callback(conn);
  });
};

// conn.connect();

// conn.query("SELECT * from character", (error, rows, fields) => {
//   if (error) throw error;
//   console.log("User info is: ", rows);
// });

// conn.end();

module.exports = { conn: pool, sql: mysql };
