const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/shuntian');
conn.on('open', () => {console.log('connection success')});
conn.on('err', (err) => {console.log('err: ' + err)});

module.exports = conn;