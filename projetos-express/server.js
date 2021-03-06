const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes') 

//para pegar o body no post
app.use(express.urlencoded({extended : true}));
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port port!`));