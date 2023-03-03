//Netflix
var video = Array()

video[1] = Array()
video[1]['nome'] = 'Naruto'
video[1]['categoria'] = 'anime'

function getVideo(video) {
    //lógica
    //http
    try {
        console.log(video[0]['nome'])
    } catch(erro) {
        // console.log(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro, mas já estamos trabalhando nisso!')
    } finally {
        console.log('Sempre passa por aqui (try / catch)')
    }
    

    console.log('A aplicação não morreu')
}

getVideo(video)