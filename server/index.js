const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose').set('debug', true);
const path = require('path');
const compression = require('compression');
const app = express();
const API_PORT = 3000;

/*
 *   MongoDB server connection
 */
const mongoDB = 'mongodb://127.0.0.1:27017/e-kammerce';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'connection error:'),
);
db.once('open', function() {
  console.log('Mongodb is connected!');
});

/*
 *   Middleware
 */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
/*
 *   Static file-serving middleware
 */
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname + '../public/index.html'),
  );
});

/*
 *   Auth and API routes
 */
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', require('./routes/router'));

/*
 *   Error-handling
 */
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || 'Internal server error.');
});

app.listen(API_PORT, () => {
  console.log(`LISTENING ON PORT ${API_PORT}...`);
});
