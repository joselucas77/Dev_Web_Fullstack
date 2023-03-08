//modelo do objeto
class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(saque) {
        this.saldo -= saque
    }

    consultarSaldo() {
        return this.saldo
    }

}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log('--- Conta X ---')
console.log(`Saldo inicial: $${x.consultarSaldo()}`)

x.depositar(100)

console.log(`Saldo após depósito: $${x.consultarSaldo()}`)

x.sacar(70)

console.log(`Saldo após saque: $${x.consultarSaldo()}`)

console.log('\n--- Conta y ---')
console.log(`saldo: $${y.consultarSaldo()}`)