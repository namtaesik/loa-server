const mysql = require("../../public/javascripts/mysql");

module.exports = {
  getCharacter: async (param, callback) => {
    //예외처리
    if ((param.query.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    mysql.conn.query(
      "call GetCharacter(?)", //
      [param.query.userId], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
        return;
        //rtData = rows[0];
      }
    );
  },
  addCharacter: async (param, callback) => {
    //예외처리
    if ((param.body.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.characterName ?? "") == "") {
      callback("캐릭터이름이 누락되었습니다.", null);
      return;
    }

    if ((param.body.class ?? "") == "") {
      callback("클래스가 누락되었습니다.", null);
      return;
    }

    if ((param.body.characterLevel ?? -1) < 0) {
      callback("캐릭터레벨이 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call AddCharacter(?,?,?,?)", //
      [
        param.body.userId,
        param.body.characterName,
        param.body.class,
        param.body.characterLevel,
      ], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
        return;
      }
    );
  },
  deleteCharacter: async (param, callback) => {
    //예외처리
    if ((param.body.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.characterId ?? -1) < 0) {
      callback("유저이름이 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call DeleteCharacter(?,?)", //
      [param.body.userId, param.body.characterId], // ? 에 들어갈 param 배열.
      (err, rows, fields) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
        return;
      }
    );
  },
};
