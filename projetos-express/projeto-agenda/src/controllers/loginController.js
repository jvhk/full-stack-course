const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {

    try{
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0){
            req.flash('errros', login.errors);
            req.session.save(function(){
            return req.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
        req.session.save(function(){
            return req.redirect('back');
        });

    }catch(e){
        console.log(e);
        return res.render('404');
    }

    
};