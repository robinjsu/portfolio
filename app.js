const express = require('express');
var app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./css'));
app.use(express.static('./js'));
app.use(express.static('.'));

app.listen(port);
