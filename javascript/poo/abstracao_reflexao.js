//um software de marcenaria
//cadeira e sofá

/*
//paradigma procedural

//cadeira
// let qtd_pernas = 4
// let giratoria = false
// let cor = 'azul'

//identidade - array
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qtd_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtd_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'preto'

function girar_cadeira(i) {
    if(cadeiras[i]['giratoria'] == true) {
        console.log('cadeira gira')
    } else {
        console.log('cadeira não é giratória')
    }
}

function add_cadeira(qtd_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira['qtd_pernas'] = qtd_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

add_cadeira(3, false, 'vermelho')

console.log(cadeiras)

// girar_cadeira(2)
*/

//paradigma de OO
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        this.giratoria == true ? console.log('cadeira gira') : console.log('cadeira não é giratória')
    }
}

let cadeira = new Cadeira(4, false, 'azul')
let cadeira2 = new Cadeira(1, true, 'vermelha')
cadeira2.girarCadeira()
