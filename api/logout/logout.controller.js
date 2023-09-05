// Controller 는 요청을 받고 Service에 요청해서 반환값을 보내기만하는 열할
// 실제 비즈니스 로직은 모두 Service에 넣는다.
const Service = require("./logout.service");

module.exports = {
  logoutUser: async (req, res) => {
    try {
      await Service.logoutUser(req, (err, result) => {
        if (err != null) {
          console.log(err);
          res.send(500, err);
          return;
        }
        if (result != undefined) {
          res.send(result);
        }
      });
    } catch (err) {
      console.log(err);
      res.send(500, err);
      return;
    }
  },
};
