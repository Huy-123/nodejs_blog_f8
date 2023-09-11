const path = require('path');
const express = require('express');
const morgan = require('morgan');
var handlebars  = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index')


// MiddleWare show data form in body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})