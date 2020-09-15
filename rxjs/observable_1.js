const { Observable, Subscriber} = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observable')
    subscriber.next('é')
    subscriber.next('bem')
    setTimeout(() => {
        subscriber.next('legal!')
    }, 1000)
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))