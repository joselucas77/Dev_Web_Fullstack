class Animal {
    constructor(cor, tamanhoCm, peso) {
        this.cor = cor
        this.tamanhoCm = tamanhoCm
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }

}

class Passaro extends Animal {
    constructor(bico, cor, tamanhoCm, peso) {
        super(cor, tamanhoCm, peso)
        this.bico = bico
    }
    
    voar() {
        console.log('Voar')
    }

}

class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanhoCm, peso) {
        super('Médio', cor, tamanhoCm, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Falar')
    }

}

let papagaio = new Papagaio(true,'Verde', 30, 350)
let papagaio2 = new Papagaio(false,'Branco', 10, 80)

console.log(papagaio)
console.log(papagaio2)