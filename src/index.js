const express = require('express');
const cors = require('cors');
const articlesRouter = require('./routes/articles');
const bodyParser = require('body-parser');

const app = express();
const corsModule = cors({
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  methods: ['GET', "POST", 'DELETE', 'PUT', 'OPTIONS'],
  allowHeaders: ['Content-Type']
});

app.use(corsModule);
app.use(bodyParser.json());
app.use('/articles', articlesRouter);

app.listen(8000, () => {
  console.log('you can visit http://127.0.0.1:8000 to visit comment api');
});