let pessoa = {
    nome: 'José',
    idade: 20
}

console.log(pessoa)

//modificando valores
pessoa.idade = 21

console.log(pessoa)

//cirando novos pares de nome/valor
pessoa.sexo = 'Masculino'

pessoa.dizerOi = () => console.log(`Olá, tudo bem?`)

pessoa.dizerOi()

console.log('----------------------------')

//objetos únicos
let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log("Ativo")
    }
}

console.log(assinatura.descricao)

let y = assinatura
console.log(y.descricao)

y.descricao = 'Internet + tv + telefone'
///
console.log(assinatura.descricao)
console.log(y.descricao)