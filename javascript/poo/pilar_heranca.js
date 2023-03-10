class Animal {
    constructor() {
        this.cor = 'branco e marrom'
        this.tamanhoCm = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }

}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'longas e caídas'
    }

    correr() {
        console.log('Correr')
    }

    rosnar() {
        console.log('Rosnar')
    }

}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'curto' 
    }
    
    voar() {
        console.log('Voar')
    }

}

class Papagaio extends Passaro{
    constructor() {
        super()
        this.sabeFalar = true
    }

    falar() {
        console.log('Falar')
    }

}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

// console.log(cachorro)
// console.log(passaro)
// console.log(papagaio)

console.log(cachorro.tamanhoCm = 30)

// cachorro.dormir()
// passaro.dormir()
// papagaio.falar()
// papagaio.dormir()