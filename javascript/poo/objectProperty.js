// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome
    // this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave
        value: estoque, // valor
        writable: true, // atua sobre alteração do valor(true/false)
        configurable: true // consigurável(true)... se o valor for 'false' não pode alterar nem deletar a chave
    })
    //exemplo do 'configurable: true'
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, // valor
    //     writable: true, // atua sobre alteração do valor(true/false)
    //     configurable: true // consigurável
    // })

    defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

let p1 = new Produto('camisa', 20, 3)
// console.log(p1)
// p1.estoque = 100
// delete p1.estoque
// console.log(p1)

console.log(Object.keys(p1))