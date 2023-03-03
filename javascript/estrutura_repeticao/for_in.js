// var listaConvidados = ['Jorge', 'Ana', 'Maria', 'José']

// console.log(listaConvidados)

var listaConvidados = Array()

listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'José'
listaConvidados['zebra'] = 'Ana'
listaConvidados[true] = 'Maria'

for(var x in listaConvidados) {
    console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}