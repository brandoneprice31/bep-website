var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev.js');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bepprojects31@gmail.com',
    pass: process.env.GMAIL_PW
  }
});

var app = express();
var compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));
app.use('/media', express.static('media'));

app.post('/contact', function(req, res) {
  console.log('Incoming mail..');

  var mailOptions = {
    from: 'bepprojects31@gmail.com',
    to: 'brandoneprice31@gmail.com',
    subject: 'Message from bep-projects.org',
    text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.text
  };

  return transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(400);
      res.send('You shall not pass.');
    } else {
      res.status(200);
      res.send('We all good baby.');
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
