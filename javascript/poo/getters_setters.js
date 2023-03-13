// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Bad value')
                return
            }

            estoquePrivado = valor
        }
    })  
}

let p1 = new Produto('camisa', 20, 3)
// console.log(p1)
// console.log(Object.values(p1))
p1.estoque = 500
console.log(`Valor do estoque: ${p1.estoque}`)
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'))