import {nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1';
import aFuncaoDefault from './modulo1';

const nome = 'Carlos';

const maria = new Pessoa('Maria', 'Carolina');

console.log(nome2, sobrenome, idade, nome);
console.log(soma(5,5));
console.log(maria);
console.log(aFuncaoDefault(6,5));