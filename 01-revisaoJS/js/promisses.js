function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + (min));
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){
            return reject('BAD VALUE');
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        //return esperaAi(333, rand(1,3));
        return esperaAi('Frase 3', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch((e) => {
        console.log('ERROR: ',e);
    });



/*   MÉTODOS ÚTEIS PARA PROMISES    */
// Promise.all Promise.race Promise.resolve Promise.reject

function baixaPagina(){
    const emCache = true;

    if(emCache){
        //return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}


const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000)
    //esperaAi(1000, 1000),
];

/*
Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((e) =>{
        console.log(e);
    });
*/
Promise.race(promises)      //entrega a primeira que resolver
    .then((valor) => {
        console.log(valor);
    })
    .catch((e) =>{
        console.log(e);
    });


baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log("Erro: ", e);
    })