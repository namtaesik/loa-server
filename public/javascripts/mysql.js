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
    } else if(field.type == "BLOB") {
      // 23.09.13 | 이부분 다른 타입 전부그냥 field.string() 처리. 만약 어디 오류나면 바꿔야함.
      // mysql에서 TEXT타입이 넘어왔을 때 Buffer로 표시되는 문제.
      return field.string();
    }
    return next();
  },
};
// createConnection 을 한 경우 추후 'conn.connect();' 를 할 필요가없다.
//const conn = mysql.createConnection(dbconfig);

// pool로 관리.
const pool = mysql.createPool(dbconfig);

function getConnection(callback) {
  console.debug('getconnection do');
  pool.getConnection(function (err, conn) {
    if(!err) {
      console.info('coonn Response');
      callback(conn);
    }
    else{
      console.debug('err ',err);
    }
  });
}

// conn.connect();

// conn.query("SELECT * from character", (error, rows, fields) => {
//   if (error) throw error;
//   console.log("User info is: ", rows);
// });

// conn.end();

module.exports = { conn: pool,getConnection:getConnection, sql: mysql };
