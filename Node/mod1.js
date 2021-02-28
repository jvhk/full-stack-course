/*const nome = "Jao"
const sobrenome = "Miranda";

const falaNome = (nome, sobrenome) => {
    console.log(nome, sobrenome);
};



//module.exports.nome = nome;

exports.nome = nome;
this.qualquerCoisa = "this se atrela ao exports";

console.log(module.exports);

*/

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;