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

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Article.findOne({_id: id}, (err, article) => {
    if (err) return next(err);
    res.send({article: article});
  });
})

router.post('/', (req, res, next) => {

});

module.exports = router