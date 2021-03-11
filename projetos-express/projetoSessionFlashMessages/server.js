require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(() => {
        app.emit('Pronto');
    }).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const port = 3000;
const helmet = require('helmet');
const csrf = require('csurf');
const {meuMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware');

app.use(helmet());

//para pegar o body no post
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'sadasdasdasdasdasdaseu190ie90wiqeskjdmas90j()',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf({cookie: true}));

//Meu middleware do arquivo middleware.js
app.use(meuMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('Pronto', () => {
    app.listen(port, () => 
        console.log(`Example app listening on port ${port}!`));
});
