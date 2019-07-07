const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    sparse: true,
  },
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login,
  });

  return user;
};

const users = mongoose.model('users', userSchema);
module.exports = users;
