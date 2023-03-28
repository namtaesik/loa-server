const mysql = require("../../public/javascripts/mysql");

module.exports = {
  getCode: async (param, callback) => {
    console.log(param.query);
    if ((param.query.groupCode ?? "") == "") {
      callback("그룹코드가 누락되었습니다.", null);
      return;
    }
    mysql.conn.query(
      "call GetCode(?)", //
      [param.query.groupCode ?? ""], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) callback(err, null);
        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
        //rtData = rows[0];
      }
    );
  },
};
