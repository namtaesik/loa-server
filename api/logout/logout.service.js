const mysql = require("../../public/javascripts/mysql");
const crypto = require("../../public/javascripts/crypto");
module.exports = {
  logoutUser: async (param, callback) => {
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.userId ?? "") == "") {
      callback("아이디가 누락되었습니다.", null);
      return;
    }
    try {
      // 세션삭제
      delete req.session.userId;
      callback(null, "로그아웃 완료"); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
    } catch (err) {
      console.log(err);
      callback(err, null);
    }
  },
};
