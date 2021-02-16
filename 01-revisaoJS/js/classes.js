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
const pessoa2 = new Pessoa('Carlos', 'Vitor');
const pessoa3 = new Pessoa('Pedro', 'Vitor');



/*  Getters e Setters */
console.log("---- Getters e Setters -------")

const _velocidade = Symbol('velocidade')

class Carro{
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number'){
            return;
        }
        if(valor > 100 || valor <=0){
            return;
        }
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] > 100){
            return;
        }
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0){
            return;
        }
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');

/*
for(let i = 0; i <= 200; i++){
    carro1.acelerar();
}
*/

carro1.velocidade = 100;   // causaria um problema sem o symbol
console.log(carro1.velocidade);