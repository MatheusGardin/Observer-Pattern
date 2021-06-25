// Definimos a classe
class Subject {
    // Cada instância da classe Observer
    // começa com um array vazio de observadores
    // que reagem a uma mudança de estado
    constructor() {
        this.observers = [];
    }

    // Adcione a capacidade de inscrever um novo objeto/Elemento DOM
    // essencialmente, adicone algo ao array de observadores
    subscribe(f) {
        this.observers.push(f);
    }

    // Adcione a capacidade de cancelar a inscrição de um objeto em particular
    // essencialmente, remove algum item do array de observadores
    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    // Atualiza todos os objetos incritos/Elementos DOM
    // e passa alguns dados para cada um deles
    fire() {
        this.observers.forEach( f => {
            f.call()
        })
    }
}


function ObserverTest(){
    console.log("observer test works!")
}

function AnotherFunction(){
    console.log("it works again")
}

const subject = new Subject();

subject.subscribe(ObserverTest);
subject.subscribe(AnotherFunction);

subject.fire();