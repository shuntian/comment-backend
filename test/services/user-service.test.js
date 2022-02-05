const UserService = require("../../src/services/user-service");

const user1 = {
  name: 'abcd', 
  nickname: 'xiaoqiang', 
  email: '23555@qwe.com', 
  password: '122'
};

UserService.save(user1).then(res => {
  console.log(res);
});

UserService.findAll().then(users => {
  console.log(users.length);
})

UserService.findUser('23@qwe.com').then(user => {
  console.log(user, "aaaa");
});

const user2 = {
  name: 'abcde'
};

UserService.updateUser('23@qwe.com', user2).then(user => {
  console.log(user, 'bbbb');
})