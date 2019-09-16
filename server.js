const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that server is running
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
