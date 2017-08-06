var express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    connect = require('connect'),
    post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/resjson', post.resjson); // JSON形式で持っているデータすべて返す
app.get('/resjson/:id([0-9]+)', post.resjson); // JSON形式で指定されたIDデータ返す

app.listen(3000);
console.log('サーバ起動中');
