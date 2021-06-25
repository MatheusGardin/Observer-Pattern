// Definimos a classe
class Subject {
    // Cada instância da classe Observer começa com um array vazio de observadores que reagem a uma mudança de estado
    constructor() {
        this.observers = [];
    }

    // Adcione a capacidade de inscrever um novo objeto/Elemento DOM essencialmente, adicone algo ao array de observadores
    subscribe(fn) {
        this.observers.push(fn);
    }

    // Adcione a capacidade de cancelar a inscrição de um objeto em particular essencialmente, remove algum item do array de observadores
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if(fn !== fnToRemove)
                return fn
        });
    }

    // Atualiza todos os objetos incritos/Elementos DOM e passa alguns dados para cada um deles
    fire() {
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}


function observerTest(){
    console.log(input.value);
}

const input = document.querySelector("#name");

const subject = new Subject();

subject.subscribe(observerTest);

input.addEventListener('keyup', e => {
    subject.fire(e.target.value);
});