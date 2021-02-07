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


// splice

const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];

// push
//const removidos = nomes.splice(nomes.length, 0, 'marcos');

//ushift
//const removidos = nomes.splice(0, 0, 'marcos');

//shift
//const removidos = nomes.splice(0,1);

// pop
//const removidos = nomes.splice(3,2);

console.log(nomes);




/*  FILTER, MAP, REDUCE  */


const arrayNumbers = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];

function callbackFilter (value){
    return (value>10);
}

const filterNumbers = arrayNumbers.filter(callbackFilter);
console.log(filterNumbers);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter((value)=>{
    return (value.nome.length >= 5);
});


const pessoasMaisCinquentaAnos = pessoas.filter((value)=>{
    return (value.idade >= 50);
});


const pessoasNomeTerminaComA = pessoas.filter((value)=>{
    return (value.nome.toLowerCase().endsWith('a'));
});

console.log(pessoasNomeTerminaComA);


// MAP

const numbers = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];

const names = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const numerosDobrados = numbers.map(function(value){
    return value*2;
});

const justNames = names.map((obj) => {
    return obj.nome;
});

console.log(numerosDobrados);
console.log(justNames);