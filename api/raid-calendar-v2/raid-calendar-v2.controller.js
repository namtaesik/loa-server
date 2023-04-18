// Controller 는 요청을 받고 Service에 요청해서 반환값을 보내기만하는 열할
// 실제 비즈니스 로직은 모두 Service에 넣는다.
const Service = require("./raid-calendar-v2.service");

module.exports = {
  getRaidCalendar: async (req, res) => {
    try {
      await Service.getRaidCalendar(req, (err, result) => {
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
  getRaidCalendarDetail: async (req, res) => {
    try {
      await Service.getRaidCalendarDetail(req, (err, result) => {
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
  addRaidCalendar: async (req, res) => {
    try {
      await Service.addRaidCalendar(req, (err, result) => {
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
  addJoinRaid: async (req, res) => {
    try {
      await Service.addJoinRaid(req, (err, result) => {
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
  quitRaid: async (req, res) => {
    try {
      await Service.quitRaid(req, (err, result) => {
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
  removeRaidCalendar: async (req, res) => {
    try {
      await Service.removeRaidCalendar(req, (err, result) => {
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
  updateRaidCalendar: async (req, res) => {
    try {
      await Service.updateRaidCalendar(req, (err, result) => {
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
  editRaidDetail: async (req, res) => {
    try {
      await Service.editRaidDetail(req, (err, result) => {
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
