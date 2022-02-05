const User = require("../models/user");

class UserService {

  static save(user) {
    return new User(user).save();
  }

  static findAll() {
    return User.find();
  }

  static findUser(email) {
    return User.find({email: email});
  }

  static updateUser(email, newUser) {
    return User.updateOne({email: email}, {$set: {...newUser}});
  }

}

module.exports = UserService;