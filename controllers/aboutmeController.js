const aboutmeDB = require('../models/aboutmeDB');

module.exports = {
  // get all posts and set them in res.locals.posts
  index(req, res) {
    const data = aboutmeDB.findAll();
    res.status(200).json(data);
  },

  getOne(req, res) {
    const data = aboutmeDB.findByParam(req.params.param);
    res.status(200).json(data);
  },
};
