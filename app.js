var express = require('express');
var app = express();

app.get('/',function (req,res) {
    res.send('hello node');
})
app.listen(3000);