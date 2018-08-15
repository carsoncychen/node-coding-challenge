const express = require('express');

// importing controllers

const postsController = require('../controllers/postsController');
const views = require('../controllers/viewController');

const routes = express.Router();

// routes.route('/posts')
//   .get(postsController.index, views.showPosts, views.show404)

module.exports = routes;
