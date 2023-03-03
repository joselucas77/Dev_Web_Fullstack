var listaConvidados = ['Jorge', 'Ana', 'Maria', 'José']

listaConvidados.forEach(function(valor, indice, array){
    console.log('Índice: ' + indice + ' | valor: ' + valor)

    if(valor === 'Ana') {
        array[indice] = 'Carol'
    }
})

console.log(listaConvidados)