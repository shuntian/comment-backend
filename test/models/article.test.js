const Article = require("../../src/models/article");

const article = new Article({
  title: '学习 react',
  subTitle: '学习 props & state',
  content: '组建建数据监护方式',
  author: 'Jack'
});

article.save().then((doc) => {
  console.log(doc);
});