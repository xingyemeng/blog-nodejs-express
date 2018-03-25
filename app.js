var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var admin = express();
app.use(bodyParser.json());
//app.set('env','development');
//app.engine('.html',require('jade').renderFile);
app.set('view engine','jade');
app.set('views','./views');
/*添加前台*/

app.get('/',function (req,res,next) {
    console.log(req.hostname);
    console.log(req.ips);
    res.render('index');
});

admin.on('mount',function (parent) {
    console.log('把admin的父应用传入进来');
});

admin.param('id',function (req,res,next,value) {

    console.log(value);
    console.log('Time: %d', Date.now());
    next();
});

admin.get('/:id',function (req,res) {
    console.log(req.params);
    console.log(req.path); //输出 /123 不包含挂载点 /admin
    console.log(req.route); //当前请求路由
    console.log(admin.mountpath);
    console.log(req.baseUrl);
    res.send('hello node');
});


app.use('/admin',admin);
app.listen(3000);