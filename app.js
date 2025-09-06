const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AWS Elastic Beanstalk!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
