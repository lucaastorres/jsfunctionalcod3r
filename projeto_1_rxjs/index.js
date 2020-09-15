const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', "",'"', ',', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', '♪', '!',''
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elemento: palavras[0], qtde: palavras.length })),   
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)

// fn.lerDiretorio(caminho)
//     .then(fn.elementosTerminadosCom('.srt'))
//     .then(fn.lerArquivos)
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor('\n'))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeIncluir('-->'))
//     .then(fn.removerElementosSeApenasNumero)
//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeApenasNumero)
//     .then(fn.agruparElementos)
//     .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
//     .then(console.log
