// require("babel-polyfill");
// require("babel-core").transform("code");
// require('node-jsx');
const path = require('path');
const express = require('express');
const app = express();
const swig = require('swig');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

var compiler = webpack(webpackConfig);

const Home = require('./router/home');
const Sign = require('./router/sign');


const Test = require('./router/test');
// var Index = require('./dev/index.jsx');
// var ReactDOM = require('react-dom/server');
// var react = require('react');

// console.log(Index);
// var _tempalte = ReactDOM.renderToString(react.createElement(Index));


app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');
app.set('views', './views')

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist' // Same as `output.publicPath` in most cases.
}));

app.use('/dist', express.static(path.join(__dirname, 'front/dist')));


app.use('/home', Home);
app.use('/sign', Sign);

app.use('/test', Test);


app.get('/index', function(req, res) {
    res.render('index', { doctor: '框校长' });
});


app.listen(3000, function() {
    console.log('done');
});
// import co from 'co';
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/kk', { useMongoClient: true });

// var schema = new mongoose.Schema({ name: String });

// schema.methods.printName = function() {
//     console.log(this.name);
// };


// var userData = mongoose.model('user', schema);

// var doc = new userData({ name: 'kuangkuang' })
// userData.find().then(function(data) {
//     console.log(data);
//     doc.printName();
// })




// userData.find().then(function(data) {
//     console.log(data.length);
// })