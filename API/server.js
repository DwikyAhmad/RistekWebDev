const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/data', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

app.post('/data', (req, res) => {
  const newData = req.body;
  const data = require('./data.json');
  data.push(newData);
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});