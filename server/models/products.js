const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  products: {
    type: Object,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
