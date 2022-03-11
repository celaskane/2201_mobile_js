//1 + 2 + ... + n-1 + n
function calculoDemorado (n){
    let p = new Promise((resolve, reject) => {
        if (n < 0){
            reject('Somente valores positivos')
        }
        else{
            let res = 0
            for (let i = 1; i<=n; i++)
                res += i
            resolve(res)
        }
    })
    return p
}

calculoDemorado(10).then((res) => {
    console.log("Ok, deu certo: " + res)
})

//const resultadoFuturo = calculoDemorado(10)
//resultadoFuturo.then ((res) => console.log(res))

//function exemplo (){
//    let p = new Promise(function(resolve, reject){
//        resolve(1)
//    })
//    return p
//}
//
//const resultadoFuturo = exemplo()
//resultadoFuturo.then((resultado) => console.log(resultado))

//function exemplo (){
//    return 1
//}
//
//const resultado = exemplo()
//console.log(resultado)

//const fs = require('fs')
//const abrirArquivo = function (nomeArquivo){
//    const exibirConteudo = function (erro, conteudo){
//        if (erro){
//            console.log("Deu erro: " + erro)
//        }
//        else{
//            console.log(conteudo.toString())
//            //processamento
//            const dobro = 2 * +conteudo.toString()
//            const finalizar = function (erro){
//                if (erro){
//                    console.log("Deu erro: " + erro)
//                }
//                else{
//                    console.log("Salvou o dobro com sucesso.")
//                }
//            }
//            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//        }
//    }
//    //segundo parâmetro: função callback
//    fs.readFile(nomeArquivo, exibirConteudo)
//}
//
//abrirArquivo('arquivo.txt')

//IO-bound
//CPU-bound