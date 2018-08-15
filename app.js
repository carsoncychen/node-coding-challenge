const express = require('express');
const request = require('request');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

// start express library
const app = express();

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const aboutmeRouter = require('./routes/aboutme');


app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// setup for views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup logger
app.use(logger('dev'));

/* set up app connect with css file */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);

app.use('/aboutme', aboutmeRouter);

// setup home index page
app.get('/', (req, res) => {
  res.render('index');
});

// error check for anything entered other than / or /posts
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Opps, not found',
  });
});

// setup server to listen on port
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
