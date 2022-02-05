const { Router } = require('express');
const Article = require("../models/article")

const router = new Router();

router.get('/', (req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) return next(err);
    // res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const result = {"articles": articles};
    res.send(result);
  });
})

module.exports = router