function Produto (nome,preco,estoque) {     
    Object.defineProperties(this, {
        nome: {
            enumerable: true,   //mostra chave ?
            value : nome,    //valor 
            writable : false,   //alteravel ?
            configurable : false    //apagar a chave?
        },
        preco : {
            enumerable: true,   //mostra chave ?
            //value : preco,    //valor 
            //writable : false,   //alteravel ?
            configurable : false    //apagar a chave?
        }
    })

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave ?
        //value : estoque,    //valor 
        //writable : false,   //alteravel ?
        configurable : false,    //apagar a chave?
        get: function(){
            return estoquePrivado;
        },
        set: function(value){
            if(typeof(value) !== 'number'){
                console.log('O valor para estoque precisa ser Number');
                return;
            }
            estoquePrivado = value;
        }
    });
};

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1);
console.log(Object.keys(p1));
p1.estoque = 500;
console.log(p1.estoque);


/*  Métodos uteis para objetos */

const produto = { nome: 'Caneca', preco: 1.8};

//copias de objeto
const outraCoisa = {
    ...produto,
    material : 'porcelana'
};

const caneca = Object.assign({}, produto, {material: 'porcelana'});

//retornar as propriedades de um objeto 
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
console.log(Object.values(produto));

console.log(produto);
console.log(outraCoisa);
console.log(caneca);


/*   PROTOTYPES    */

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = "Estou aqui";

const pessoa1 = new Pessoa('Joao', 'Vitor');
const pessoa2 = new Pessoa('Marcos', 'Vinicius');
