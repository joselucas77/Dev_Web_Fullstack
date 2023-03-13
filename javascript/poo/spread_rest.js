// CONTEXTO SPREAD -> espalhar estruturas de dados

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'

// console.log(tituloArtigo)
// console.log(...tituloArtigo)
// console.log([...tituloArtigo])

//Array
let cursos1 = ['NodeJs', 'ES6']
let cursos2 = ['PHP 7', 'MySql']
let cursosCompletos = ['DevWeb completo', ...cursos1, ...cursos2]

// console.log(cursosCompletos)

//objetos
const pessoa = {nome: 'José', idade: 20}
const clone = {...pessoa, endereco: 'Rua F'}

// console.log(clone)

//-----------------------------------------------

// CONTEXTO REST -> juntar estruturas de dados

// function soma(...param) {
//     let resultado = 0

//     console.log(param)

//     param.forEach(v => resultado += v)

//     return resultado
// }

// console.log(soma(3, 7 , 4, 6))

function multiplacacao(x, ...y) {
    console.log(x)
    let res = 0
    console.log(y)

    y.forEach(m => res += x * m)

    return res
}

console.log(multiplacacao(3, 5, 2, 4, 0))
