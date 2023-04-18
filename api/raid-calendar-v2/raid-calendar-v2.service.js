const mysql = require("../../public/javascripts/mysql");

module.exports = {
  getRaidCalendar: async (param, callback) => {
    //예외처리
    console.log(param.query);
    mysql.conn.query(
      "call GetRaidCalendarV2(?)", //
      [param.query.contentsCode ?? ""], // ? 에 들어갈 param 배열.
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
  getRaidCalendarDetail: async (param, callback) => {
    //예외처리
    if ((param.query.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }
    mysql.conn.query(
      "call getRaidCalendarDetail(?)", //
      [param.query.attackId], // ? 에 들어갈 param 배열.
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
  addRaidCalendar: async (param, callback) => {
    console.log(param.body);
    //예외처리
    if ((param.body.attackDate ?? "") == "") {
      callback("일자가 누락되었습니다.", null);
      return;
    }

    if (
      param.body.attackDate instanceof Date &&
      !isNaN(param.body.attackDate)
    ) {
      callback("일자가 형식에 맞지 않습니다.", null);
    }
    if ((param.body.contentsCode ?? "") == "") {
      callback("컨텐츠 코드가 누락되었습니다.", null);
      return;
    }
    if ((param.body.difficultyCode ?? "") == "") {
      callback("난이도 코드가 누락되었습니다.", null);
      return;
    }
    if ((param.body.remark ?? "") == "") {
      callback("일정 비고가 누락되었습니다.", null);
      return;
    }
    if (param.body.isUnknown == null) {
      callback("일정 미정여부가 누락되었습니다.", null);
      return;
    }
    if ((param.body.unknownRemark ?? -1) < 0) {
      callback("일정 미정 비고가 누락되었습니다.", null);
      return;
    }
    if ((param.body.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    // 임시주석
    // if ((param.body.limitMember ?? -1) < 0) {
    //   callback("제한인원이 누락되었습니다.", null);
    //   return;
    // }
    mysql.conn.query(
      "call AddRaidCalendar(?,?,?,?,?,?,?,?)", //
      [
        param.body.attackDate,
        param.body.remark,
        param.body.isUnknown,
        param.body.unknownRemark,
        param.body.userId,
        param.body.limitMember,
        param.body.contentsCode,
        param.body.difficultyCode,
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
  addJoinRaid: async (param, callback) => {
    //예외처리
    if ((param.body.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.userId ?? -1) < 0) {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.characterId ?? -1) < 0) {
      callback("캐릭터ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.proficiency ?? "") == "") {
      callback("숙련도가 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call AddJoinRaid(?,?,?,?,?)", //
      [
        param.body.attackId,
        param.body.userId,
        param.body.characterId,
        param.body.remark ?? "",
        param.body.proficiency,
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
  quitRaid: async (param, callback) => {
    //예외처리
    if ((param.body.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.userId ?? "") == "") {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call QuitRaid(?,?)", //
      [param.body.attackId, param.body.userId], // ? 에 들어갈 param 배열.
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
  removeRaidCalendar: async (param, callback) => {
    //예외처리
    if ((param.body.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call RemoveRaidCalendar(?)", //
      [param.body.attackId], // ? 에 들어갈 param 배열.
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
  updateRaidCalendar: async (param, callback) => {
    //예외처리
    if ((param.body.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.attackDate ?? "") == "") {
      callback("일자가 누락되었습니다.", null);
      return;
    }

    if (
      param.body.attackDate instanceof Date &&
      !isNaN(param.body.attackDate)
    ) {
      callback("일자가 형식에 맞지 않습니다.", null);
    }
    if ((param.body.contentsCode ?? "") == "") {
      callback("컨텐츠 코드가 누락되었습니다.", null);
      return;
    }
    if ((param.body.difficultyCode ?? "") == "") {
      callback("난이도 코드가 누락되었습니다.", null);
      return;
    }
    if ((param.body.remark ?? "") == "") {
      callback("일정 비고가 누락되었습니다.", null);
      return;
    }
    if (param.body.isUnknown == null) {
      callback("일정 미정여부가 누락되었습니다.", null);
      return;
    }
    if ((param.body.unknownRemark ?? -1) < 0) {
      callback("일정 미정 비고가 누락되었습니다.", null);
      return;
    }
    // 임시주석
    // if ((param.body.limitMember ?? -1) < 0) {
    //   callback("제한인원이 누락되었습니다.", null);
    //   return;
    // }
    mysql.conn.query(
      "call UpdateRaidCalendar(?,?,?,?,?,?,?,?)", //
      [
        param.body.attackId,
        param.body.attackDate,
        param.body.bossCode,
        param.body.isUnknown,
        param.body.unknownRemark,
        param.body.limitMember,
        param.body.contentsCode,
        param.body.difficultyCode,
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
  editRaidDetail: async (param, callback) => {
    //예외처리
    if ((param.body.attackId ?? -1) < 0) {
      callback("레이드 일정 ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.userId ?? -1) < 0) {
      callback("유저ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.beforeCharacterId ?? -1) < 0) {
      callback("기존 신청 캐릭터ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.characterId ?? -1) < 0) {
      callback("캐릭터ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body.proficiency ?? "") == "") {
      callback("숙련도가 누락되었습니다.", null);
      return;
    }

    mysql.conn.query(
      "call EditRaidDetail(?,?,?,?,?,?)", //
      [
        param.body.attackId,
        param.body.userId,
        param.body.beforeCharacterId,
        param.body.characterId,
        param.body.remark ?? "",
        param.body.proficiency,
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
};
