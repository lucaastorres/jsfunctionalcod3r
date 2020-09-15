function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, intervalo)
            
            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const temp1 = gerarNumeros()
const exerc11 = temp1.iniciar(numero => {
    console.log(`#1.1: ${numero * 2}`)
}, 1000)

const exerc12 = temp1.iniciar(numero => {
    console.log(`#1.2: ${numero * 2}`)
}, 500)

const temp2 = gerarNumeros()
const exerc2 = temp2.iniciar(a => {
    console.log(`#2: ${a + 100}`)
}, 2000)

setTimeout(() => {
    exerc11.parar()
    exerc2.parar()
}, 10000)

setTimeout(() => {
    exerc12.parar()
}, 12000)
