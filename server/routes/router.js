const router = require('express').Router();
const mongoose = require('mongoose').set('debug', true);
const db = mongoose.connection;

// BASE URL: http://localhost:3000/api/
/*
* Stores a single username into db
*/
router.post('/', async (req, res, next) => {
  try {
    db.collection('users').insertOne(req.body, (err, user) => {
      if (err) throw err
      res.send('saved to db: ' + user)
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
});

/*
* Retrieves array list of users from db
*/
router.get('/usersList', async (req, res, next) => {
  try {
    db.collection('users').find({}).toArray(function(err, users) {
      if (err) {
        throw err
      } else {
        console.log(users)
        res.json(users)
      }
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
