const mysql = require("../../public/javascripts/mysql");
const crypto = require("../../public/javascripts/crypto");
module.exports = {
  loginUser: async (param, callback) => {
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.userId ?? "") == "") {
      callback("아이디가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.password ?? "") == "") {
      callback("패스워드가 누락되었습니다.", null);
      return;
    }
    console.log(param.body?.password);
    try {
      mysql.conn.query(
        "call LoginUser(?)", //
        [param.body.userId ?? ""], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          //console.log(rows);
          //console.log(rows[0][0].userId);
          if (err) callback(err, null);
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].userId != undefined
          ) {
            // 비밀번호가 다를 경우
            if (rows[0][0].passWord != param.body.password) {
              callback(null, [{ message: "비밀번호가 다릅니다." }]);
            } else {
              rows[0][0].passWord = ""; //비밀번호는 지워서보내
              callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
            }
          } else {
            // 정보가 없을 경우
            callback(null, [{ message: "계정 정보가 없습니다." }]);
          }
        }
      );
    } catch (err) {
      console.log(err);
      callback(err, null);
    }
  },
};
