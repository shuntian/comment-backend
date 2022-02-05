const { Router } = require('express');
const Article = require("../models/article")

const router = new Router();

router.get('/', (req, res, next) => {
  const { search_text } = req.query;
  if (search_text) {
    const reg = new RegExp(search_text);
    Article.find({$or: [{title: {$regex: reg}}, {content: reg}]}, (err, articles) => {
      if (err) return next(err);
      // res.setHeader('Content-Type', 'application/json;charset=utf-8');
      const result = {"articles": articles};
      res.send(result);
    });
    return;
  }
  Article.find({}, (err, articles) => {
    if (err) return next(err);
    // res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const result = {"articles": articles};
    res.send(result);
  });
});

router.post('/', (req, res, next) => {
  const { article } = req.body;
  const articleObj = new Article(article);
  articleObj.save((err) => {
    if (err) next(err);
    res.send({
      code: 0,
      article: article
    });
  })
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Article.findOne({_id: id}, (err, article) => {
    if (err) return next(err);
    res.send({article: article});
  });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  Article.findOne({_id: id}, (err, article) => {
    if (err) return next(err);
    article.content = content;
    article.save((err) => {{
      if (err) return next(err);
      res.send({
        message: '更新成功',
      });
    }})
  });
});

router.post('/:id/comments', (req, res, next) => {
  const { id } = req.params;
  const { comment } = req.body;
  Article.findOne({_id: id}, (err, article) => {
    if (err) return next(err);
    article.comments.push(comment);
    article.save((err, article) => {
      if (err) return next(err);
      res.send({
        message: '评论成功',
        article: article
      });
    })
  })
});

module.exports = router
