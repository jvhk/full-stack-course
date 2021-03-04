const express = require('express');
const app = express();
const port = 3000;

//para pegar o body no post
app.use(express.urlencoded({extended : true}));

// Read
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button type="submit">Enviar</button>
    </form> 
    `);
});

//req params
app.get('/testes/:idUsuarios?', (req, res) => {
  res.send(req.params.idUsuarios);
})

app.post('/', (req,res) =>{
    console.log(req.body);
    res.send("Recebi o formulario");
});

app.listen(port, () => console.log(`Example app listening on port port!`))