// Controller 는 요청을 받고 Service에 요청해서 반환값을 보내기만하는 열할
// 실제 비즈니스 로직은 모두 Service에 넣는다.
const Service = require("./character.service");

module.exports = {
  getCharacter: async (req, res) => {
    try {
      await Service.getCharacter(req, (err, result) => {
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
    }
  },
  addCharacter: async (req, res) => {
    try {
      await Service.addCharacter(req, (err, result) => {
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
  deleteCharacter: async (req, res) => {
    try {
      await Service.deleteCharacter(req, (err, result) => {
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
  editCharacter: async (req, res) => {
    try {
      await Service.editCharacter(req, (err, result) => {
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
    }
  },
  setMainCharacter: async (req, res) => {
    try {
      await Service.setMainCharacter(req, (err, result) => {
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
    }
  },
};
