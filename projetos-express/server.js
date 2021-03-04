const express = require('express');
const app = express();
const port = 3000;

// Read
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button type="submit">Enviar</button>
    </form> 
    `);
});

app.get('/contato', (req, res) => {
    res.send('Pagina Contato!');
});

app.post('/', (req,res) =>{
    res.send("Recebi o formulario");
});

app.listen(port, () => console.log(`Example app listening on port port!`))