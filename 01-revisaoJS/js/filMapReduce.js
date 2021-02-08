/*
Retornar a soma do dobro de todos os pares
- filtrar pares
- dobrar valores
- reduzir (somar tudo)
*/

const numbers = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];
const numerosPares = numbers.filter((value) => {
    return value % 2 === 0;
}).map((value) => {
    return value * 2;
}).reduce((ac, value) => {
    return ac + value;  //acumula(no 'ac') e soma o 'value'(proximo valor do array)
});

// [ 50, 80, 2, 4, 8, 22 ] -> pares
// [ 100, 160, 4, 8, 16, 44 ] -> dobrados

console.log(numerosPares);