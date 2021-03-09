require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(() => {
        app.emit('Pronto');
    }).catch(e => console.log(e));

const port = 3000;
const routes = require('./routes');

const meuMiddleware = require('./src/middleware/middleware');

//para pegar o body no post
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.resolve(__dirname, 'public')));

// views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Meu middleware do arquivo middleware.js
app.use(meuMiddleware);
app.use(routes);


app.on('Pronto', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
