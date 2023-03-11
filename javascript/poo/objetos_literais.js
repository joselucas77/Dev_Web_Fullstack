class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas $${this.preco.toFixed(2)}`)
    }
}

let produto = new Produto('Notebook', 2500)
produto.verDescricao()

//Objeto Literal

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function() {
        console.log(`${this.descricao} por apenas $${this.preco.toFixed(2)}`)
    }
}

produtoLiteral.verDescricao()
