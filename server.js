const express = require('express');
const app = express();
const fetch = require('node-fetch');
const config = require('./config');
const path = require('path');
const port = process.env.PORT || 5000;

const secretKey = config.SECRET_KEY;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//serve static assets if inproduction
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/', (req, res) => {
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  fetch('https://us4.api.mailchimp.com/3.0/lists/885dd23f5b', {
    method: 'POST',
    headers: {
      Authorization: `rafael ${secretKey}`
    },
    body: jsonData
  })
    .then(e => {
      if (e.status === 200) {
        res.redirect('/thankyou');
      }
    })
    .catch(() => {
      console.log('fetch error');
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
