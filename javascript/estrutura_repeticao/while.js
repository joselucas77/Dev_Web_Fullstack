var x = 1

console.log('Início')

// //false
// while(x<=10) {
//     console.log(x)
//     x++
//     if(x === 5) { 
//         // break 
//         continue //se o 'x++' estiver no final da estrutura de repetição isto provocará um laço infinito
//     }

//     // x++
// }

do {
    console.log(x)
    x++
} while (x<=10);

console.log('Fim')