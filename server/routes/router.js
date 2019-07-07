const router = require('express').Router();
const products = require('../models/products');
const users = require('../models/user');
const mongoose = require('mongoose').set('debug', true);
const db = mongoose.connection;

router.use('/users', require('../models/user'))

// BASE URL: http://localhost:3000/api/users/
router.post('/', async (req, res, next) => {
  try {
    db.collection('users').insertOne(req.body, (err, user) => {
        if (err) return console.error(err)
        res.send('saved to db: ' + user)
    })
  } catch (err) {
    next(err);
  }
});

// router.get('/', async (req, res, next) => {
//   try {
//     res.json(req.username);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });
module.exports = router;
