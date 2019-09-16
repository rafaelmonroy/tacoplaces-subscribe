const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('get request working');
});

app.post('/', function(req, res) {
  var email = req.body.email;
  console.log(email);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
