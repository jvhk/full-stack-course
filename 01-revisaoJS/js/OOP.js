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


/*  Manipulando prototypes   */

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveA);

//funcao construtora
function Product(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Product.prototype.desconto = function(perc) {
    this.preco = this.preco - (this.preco * (perc/100));
};

Product.prototype.aumento = function(perc) {
    this.preco = this.preco + (this.preco * (perc/100));
};

const product1 = new Product('Camiseta',50);
product1.desconto(100);

console.log(product1);

//produto literal
const product2 = {
    nome: 'Caneca',
    preco : 15
};

Object.setPrototypeOf(product2, Product.prototype);

product2.aumento(100); 

console.log(product2);


const product3 = Object.create(Product.prototype, {
    preco : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    peso : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    },
});

product3.aumento(30);

console.log(product3);