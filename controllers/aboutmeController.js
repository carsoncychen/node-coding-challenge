const aboutmeDB = require('../models/aboutmeDB');

module.exports = {
  index(req, res) {
    const data = aboutmeDB.findAll();
    res.status(200).json(data);
  },

  getOne(req, res) {
    const { param } = req.params;
    const data = aboutmeDB.findByParam(param);
    if (data[param] === undefined) {
      res.render('error');
    } else {
      res.status(200).json(data);
    }
  },
};
