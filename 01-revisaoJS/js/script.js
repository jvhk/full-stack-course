console.log('hello!');

//  Objeto Math
let num1 =9.54578;
//let num2 = Math.floor(num1);
//let num3 = Math.ceil(num1);
//let num4 = Math.round(num1);
//console.log(num4);
console.log(Math.max(1,2,3,4,5));
console.log(Math.random());


//  Funções 
function falaOi(){
    console.log("Oi");
}

falaOi();

const souUmDado = function(){
    console.log("Soi um dado");
}

souUmDado();

//Arrow
const souUmDadoArrow = () => {
    console.log("Soi um dado Arrow");
}

souUmDadoArrow();

const objFalar = {
    falar: function(){
        console.log("Falar")
    }
};

objFalar.falar();


let nome = 'Joao';

function nomear(){
    nome += ' Vitor';
    console.log(nome);     
}

nomear();
console.log(nome);



// factory functions

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        fala: function (assunto){
            return `${this.nome} está ${assunto}.`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala(' falando sobre JS'));