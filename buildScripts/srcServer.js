const express = require('express');
const path=require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.dev');
const compiler = webpack(config);

const open=require('open');


const port= 3000;
const app=express();


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
if (err)
{console.log(err);}
else
{ (async()=>{await open('http://localhost:'+port);})()



}

})
