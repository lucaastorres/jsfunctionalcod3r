// Closure é quando uma função "lembra"
// seu escopo léxio, mesmo quando a função
// é executada fora desse escopo léxico

const somarXMais3 = require('./closure_escopo')

const x = 1000
console.log(somarXMais3())