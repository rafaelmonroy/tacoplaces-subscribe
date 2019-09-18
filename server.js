const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('get request working');
});

app.post('/', function(req, res) {
  var email = req.body.email;

  console.log(email);

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
      Authorization: 'rafael ea777093a4468ed3ce79ffb037c11dd6-us4'
    },
    body: jsonData
  })
    .then(e => {
      console.log(e.status);
    })
    .catch(() => {
      console.log('fetch error');
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));

//list 885dd23f5b
//api ea777093a4468ed3ce79ffb037c11dd6-us4
