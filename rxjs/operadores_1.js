// os dois tipois...

// 1. Operadores de Crianção

const { of } = require('rxjs')

// 2. Operadores Encadáveis(Pipeable Op.)

const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'último')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    })