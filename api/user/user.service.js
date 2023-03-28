const mysql = require("../../public/javascripts/mysql");

module.exports = {
  getUser: async (param, callback) => {
    console.log(param.query);
    mysql.conn.query(
      "call GetUser(?)", //
      [param.query.userId ?? ""], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) callback(err, null);
        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
        //rtData = rows[0];
      }
    );
  },
  addUser: async (param, callback) => {
    console.log(param.body);
    // 예외처리
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.password ?? "") == "") {
      callback("암호가 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call AddUser(?,?,?)", //
      [
        param.body.userId ?? "",
        param.body.password ?? "",
        param.body.userGrant ?? "user",
      ], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) {
          callback(err, null);
          return;
        }

        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
      }
    );
  },
};
