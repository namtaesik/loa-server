// Controller 는 요청을 받고 Service에 요청해서 반환값을 보내기만하는 열할
// 실제 비즈니스 로직은 모두 Service에 넣는다.
const Service = require("./user.service");

module.exports = {
  getUser: async (req, res) => {
    try {
      await Service.getUser(req, (err, result) => {
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
  addUser: async (req, res) => {
    try {
      await Service.addUser(req, (err, result) => {
        if (err != null) {
          console.log(err);
          res.send(500, err);
          return;
        }
        if (result != undefined) {
          res.send(result);
          return;
        }
      });
    } catch (err) {
      console.log(err);
      res.send(500, err);
      return;
    }
  },
  updateUser: async (req, res) => {
    try {
      await Service.updateUser(req, (err, result) => {
        if (err != null) {
          console.log(err);
          res.send(500, err);
          return;
        }
        if (result != undefined) {
          res.send(result);
          return;
        }
      });
    } catch (err) {
      console.log(err);
      res.send(500, err);
      return;
    }
  },
};
