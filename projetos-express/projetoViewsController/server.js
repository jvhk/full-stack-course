const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes') 

//para pegar o body no post
app.use(express.urlencoded({extended : true}));

// views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port port!`));