const User = require("../../src/models/user");

const user = new User({
  name: 'xiaoqiang',
  nickname: 'shuntianxiaoqiang',
  email: 'aaaaa@qq.com',
  password: 'abcdef'
});

user.save().then((user) => {
  console.log(user);
});