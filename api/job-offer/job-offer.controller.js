// Controller 는 요청을 받고 Service에 요청해서 반환값을 보내기만하는 열할
// 실제 비즈니스 로직은 모두 Service에 넣는다.
const Service = require("./job-offer.service");

module.exports = {
  addJobOfferMst: async (req, res) => {
    try {
      
      await Service.addJobOfferMst(req, (err, result) => {
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
  getJobOfferMst: async (req, res) => {
    try {
      
      await Service.getJobOfferMst(req, (err, result) => {
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
  updateJobOfferMst: async (req, res) => {
    try {
      
      await Service.updateJobOfferMst(req, (err, result) => {
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
  deleteJobOfferMst: async (req, res) => {
    try {
      
      await Service.deleteJobOfferMst(req, (err, result) => {
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
  getJobOfferList: async (req, res) => {
    try {
      
      await Service.getJobOfferList(req, (err, result) => {
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
  addJobOfferHashTagMst: async (req, res) => {
    try {
     
      await Service.addJobOfferHashTagMst(req, (err, result) => {
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
  deleteJobOfferHashTag: async (req, res) => {
    try {
      
      await Service.deleteJobOfferHashTag(req, (err, result) => {
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
