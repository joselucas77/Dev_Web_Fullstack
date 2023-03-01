function calcular(tipo, valor) {
    //variável do elemento (id resultado)
    var tela = document.getElementById('resultado')

    if(tipo === 'valor') {
        tela.value += valor
    } else if(tipo === 'acao') {

        if(valor === 'c') {
            //limpar o visor
            tela.value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor =='.') {
            tela.value += valor
        }

        if(valor === '=') {
            var valor_campo = tela.value
            //eval faz com que o navegador interprete 
            tela.value = eval(valor_campo) 
        }
    }

}