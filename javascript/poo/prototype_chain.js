// Object.prototype

// let animal = { attr1: 'a' }
// let vertebrado = { __proto__: animal, attr2: 'b' }
// let ave = { __proto__: vertebrado, attr3: 'c', attr2: 'x' }

// console.log(ave.attr3, ave.attr2, ave.attr1)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camisa', 50)

const p2 = {
    nome: 'Canena',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

console.log(p1)
console.log(p2)