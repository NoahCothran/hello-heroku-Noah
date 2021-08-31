const express = require('express');
const app = express();

app.get('/', function(req, res) {

    res.send('<h3>Hello Node on Heroku</h3>');

});

app.listen(process.env.PORT || 3000);