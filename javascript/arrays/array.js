// var lista = []

// lista[0] = 'Banana'
// lista[1] = true
// lista['m'] = 'Morango'
// lista[3] = 100

//Array multidimensional
// var lista = Array()
// lista['nomes'] = ['José', 'Andréa']
// lista['sobrenomes'] = ['Lucas', 'Giovanna']

// console.log(lista.length)
// console.log(lista['nomes'][0] + ' ' + lista['sobrenomes'][0])

//Inclusão e exclusão de elementos
// var frutas = ['Abacaxi', 'Morango']
// //incluir um elemento no início do array
// frutas.unshift('Manga')
// //incluir um elemento no final do array
// frutas.push('Acerola')

// console.log(frutas)

// //excluir um elemento do início do array
// frutas.shift()
// //excluir um elemento do início do array
// frutas.pop()

// console.log(frutas)


// //Método de pesquisa
// var lista = ['lucas', 'luan', 'carlos']

// var aux = lista.indexOf('lucas')

// if(aux === -1) {
//     console.log('Este elemento não existe')
// } else {
//     console.log('O Elemento está na posição ' + aux)
// }


//Ordenação de elementos
var lista_frutas = ['banana', 'abacaxi', 'uva', 'manga']
var lista_num = [12,5,1,0,14,3]

console.log(lista_frutas.sort())
console.log(lista_num.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a-b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}


