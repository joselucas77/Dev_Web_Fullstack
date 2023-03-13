// DESTRUCTURING ASSIGNMENT

//------------------------------------------------

console.log('---------------Array---------------')
//Array
// token Array => []
let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

// let [a, b, , c] = frutas //pular um índice
let [a, b = 'Abacate', c, d, e = 'Banana'] = frutas

// console.log(a,b,c,d,e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Lucas']]

let [[,,p,,],[,n2]] = coisas

console.log(n2)
console.log(p)

//------------------------------------------------

console.log('--------------Object--------------')
// Object
// token Object => {}

let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

let { descricao, preco } = produto
console.log(descricao, preco)

let { detalhes: { fabricante, modelo } } = produto
console.log(fabricante, modelo)

//------------------------------------------------

console.log('-------------Function-------------')

//Array
// let arr = [10,20,30,40]

// function teste([a,b,,d,e=50]) {
//     console.log(a,b,d,e)
// }

// teste(arr)

//Obeject
let obj = {
    a: 90,
    b: 80,
    c: 70,
    d: 60
}

function teste( {a: x, b, d} ) {
    console.log(x, b, d)
}

teste(obj)

//------------------------------------------------

console.log('---------- spread + rest ----------')

// let arr = [10,20,30,40]

// let [ y, ...resto] = arr

// console.log(y)
// console.log(resto)

let objeto = {
    v: 10, n: 20, m: 30
}

let { v, ...z } = objeto

console.log(v)
console.log(z)