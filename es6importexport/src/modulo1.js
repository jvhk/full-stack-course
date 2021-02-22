const nome = 'joao';
const sobrenome = 'vitor';
const idade = 40;

function soma(x,y){
    return x+y;
}

//exportando na criação
export class Pessoa { 
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default function multiplica(num1, num2){
    return num1 * num2;
}

//exportando após a criação
export {nome, sobrenome, idade, soma};