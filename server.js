var path = require('path');
var express = require('express');
require('dotenv').config();

var app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 5000);
