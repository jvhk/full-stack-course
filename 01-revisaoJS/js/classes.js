class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }

}

const pessoa1 = new Pessoa('João', 'Vitor');
const pessoa1 = new Pessoa('Carlos', 'Vitor');
const pessoa1 = new Pessoa('Pedro', 'Vitor');