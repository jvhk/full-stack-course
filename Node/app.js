//const mod1 = require('./mod1').nome;
//const mod1 = require('./mod1');


//console.log(mod1);


//const { Pessoa } = require("./mod1");

//const p1 = new Pessoa('jao');

const multiplicacao = require("./a/b/c/mod1");

const num2 = require('./z/mod2');

console.log(num2);

console.log(multiplicacao(2,3));

console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log(path.resolve(__dirname, '..', '..'));

//console.log(p1);