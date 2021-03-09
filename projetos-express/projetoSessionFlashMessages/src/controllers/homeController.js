exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario);
    //req.session.usuario = {nome: 'Joao', logado : true};
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}