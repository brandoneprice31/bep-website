var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var webpack = require('webpack');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bepprojects31@gmail.com',
    pass: process.env.GMAIL_PW
  }
});

var app = express();

app.disable('etag');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (process.env.ENV == "production" && req.headers['X-Forwarded-Proto'] == 'http') {
    res.redirect('https://' + req.headers.host + req.url);
  }

  next();
});

app.use('/public', express.static('public'));
app.use('/media', express.static('media'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

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
      res.status(400).send('uh oh');
    } else {
      res.send('yeehaw');
    }
  });
});

app.get('/healthcheck', function(req, res) {
  res.send('YEEHAW');
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
