const { Router } = require('express');
const Article = require("../models/article");
const User = require('../models/user');
const UserService = require('../services/user-service');

const router = new Router();

router.get('/', (req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) return next(err);
    // res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const result = {"articles": articles};
    res.send(result);
  });
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Article.findOne({_id: id}, (err, article) => {
    if (err) return next(err);
    res.send({article: article});
  });
})

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  UserService.findUser(email).then(user => {
    if (user.password === password) {
      return res.send({code: 1, message: 'password is error'});
    }
    res.send({code: 0, message: "login success"});
  }).catch(err => {
    next(err);
  })
});

router.post('/register', (req, res, next) => {
  const { name, nickname, email, password } = req.body;
  const newUser = { name, nickname, email, password };
  if (!email) {
    res.statusCode = 400;
    res.send({code: 1, message: "email is required"});
    return;
  }
  UserService.findUser(email).then(user => {
    if (user && user.length > 0) {
      res.statusCode = 400;
      res.send({code: 1, message: "email has taken"});
      return;
    }
    UserService.save(newUser).then(user => {
      res.send({code: 0, user: user});
    });
  }).catch(err => {
    next(err);
  })
});

module.exports = router