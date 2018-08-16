const aboutMeData = [

];

module.exports = {
  // get all posts and set them in res.locals.posts
  index(req, res) {
    console.log(req.params);
    res.status(200).json({
      message: 'testing',
    });
  },

  getOne(req, res) {
    console.log(req.params, 'in one');
    res.status(200).json({
      message: 'testing one',
    });
  },
};
