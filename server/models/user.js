const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login,
  });

  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
