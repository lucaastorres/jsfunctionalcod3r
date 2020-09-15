// Uma função pura é uma função em que valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

// Função impura

function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + 1
}

console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))