const mongoose = require('mongoose');
const connection = require('./connection');

const CommentSchema = new mongoose.Schema({
  user_id: String,
  article_id: String,
  content: String,
  create_time: Date,
  update_time: Date,
});

const Comment = connection.model('Comment', CommentSchema);

module.exports = Comment;