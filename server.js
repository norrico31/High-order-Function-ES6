const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// db config
let db = require('./config/Key').MongoURI;

// db connection
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Connected to DB!'))
.catch(err => console.log({ err }));

// static folder
app.use(express.static(path.resolve(__dirname, 'public')));

// handlebars
app.engine('hbs', expbhs({ defaultLayout: 'main', layoutsDir: path.resolve(__dirname, 'views/public'), extname: 'hbs' }));
app.set('view engine', 'hbs');

// body parser 
app.use(bodyParser.urlencoded({ extended: true }));

// routes 
app.use('/', require('./routes/handlers'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`[server.js]: running on PORT ${PORT}`));