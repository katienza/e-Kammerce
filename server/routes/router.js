const router = require('express').Router();
const mongoose = require('mongoose').set('debug', true);
const Products = require('../models/products');
const db = mongoose.connection;

// BASE URL: http://localhost:3000/api/
/*
* Stores a single username into db
*/
router.post('/', async (req, res, next) => {
  try {
    db.collection('users').insertOne(req.body, await function(err, user) {
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
    db.collection('users').find({}).toArray(await function(err, users) {
      if (err) {
        throw err
      } else {
        res.json(users)
      }
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
});

/*
* Retrieves array list of products from db
*/
router.get('/products', async (req, res, next) => {
  try {
    await Products.find({}).lean().exec(function(err, products) {
      if (err) {
        throw err
      } else {
        res.json(JSON.parse(JSON.stringify(products)))
      }
    })
    
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;
