var path = require('path');
var express = require('express');

var app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 5000);
