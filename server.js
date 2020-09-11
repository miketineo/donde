const express = require('express');
const app = express();
var path = require('path');

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.render('index', {lat: 39.195892, lng: 9.1594930})
  // res.send('Hello miguel is here: ');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
