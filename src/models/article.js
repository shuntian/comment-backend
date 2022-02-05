const mongoose = require('mongoose');
const connection = require('./connection');

const ArticleSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  content: String,
  comments: Array,
  author: String,
});

const Article = connection.model('Article', ArticleSchema);

module.exports = Article;