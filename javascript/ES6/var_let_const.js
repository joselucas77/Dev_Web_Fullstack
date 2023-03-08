// Operadores de declaração de variáveis Var, Let e Const
// 3 escopos: bloco, função e global

var firstName = 'Jose'
let secondName = 'Lucas'
const LAST_NAME = 'Cardoso'

function name() {

    if(true) {
        var firstName = 'Luan'
        let secondName = 'Reynan'
        const LAST_NAME = 'Santos'

        console.log('Dentro do bloco seu nome é: ' + firstName + ' ' + secondName + ' ' + LAST_NAME)
    }

    console.log('Dentro da função seu nome é: ' + firstName + ' ' + secondName + ' ' + LAST_NAME)
}

name()

// utilizando Template String
console.log(`No global seu nome é:
${firstName} ${secondName} ${LAST_NAME}`)

