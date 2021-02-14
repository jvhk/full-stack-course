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


/*  HERANÇA */

function Produtos(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.aumento = function(quantia) {
    this.preco += quantia; 
};

Produtos.prototype.desconto = function(quantia) {
    this.preco -= quantia; 
};

function Blusa(nome, preco, cor){
    Produtos.call(this, nome, preco);
    this.cor = cor;
};

Blusa.prototype = Object.create(Produtos.prototype);
Blusa.prototype.constructor = Blusa;

const caneta = new Produtos('Caneta', 7.5);
const blusa = new Blusa('Regata', 7.5, 'Preta');

console.log(caneta);
console.log(blusa);


/* POLIMORFISMO */

//Superclasse
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/C : ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(0.01);


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log("Testes na Poupança:");

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);


/* FACTORY FUNCTIONS E PROTOTYPES */
console.log("---- FACTORY FUNCTIONS E PROTOTYPES -------");

const falar = {
    falar(nome){
        console.log(`${this.nome} está falando!`);
    }
};

const comer = {
    comer(nome){
        console.log(`${this.nome} está comendo!`);
    }
};

const beber = {
    beber(nome){
        console.log(`${this.nome} está bebendo!`);
    }
};

//const personPrototype = {...falar, ...comer, ...beber};
//ou
const personPrototype = Object.assign({}, falar, comer, beber);

function criarPessoa(nome, sobrenome){
    return Object.create(personPrototype, {
        nome : {value : nome},
        sobrenome : {value : sobrenome}
    });
}

const person1 = criarPessoa('Luiz', 'Otávio');
const person2 = criarPessoa('Maria', 'Aparecida');

console.log(person1);
console.log(person2);