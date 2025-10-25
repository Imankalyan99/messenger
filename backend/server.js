const express = require('express');
const { PassThrough } = require('stream');
const app = express();
const port = process.env.port || 5000;

// data Pass
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});