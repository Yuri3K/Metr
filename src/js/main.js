class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      })
    }
  }

  subscribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn)
    }
  }
}


const input = document.querySelector('input');
const btn = document.querySelector('button');
const title = document.querySelector('h1');

let emitter = new EventEmitter();

const subscribe1 = emitter.subscribe('event:changeName', (obj) => {
  title.innerHTML = `Your name is ${obj.name}`
})

const subscribe2 = emitter.subscribe('event:changeName', () => {
  alert('Hello World')
})

console.log(emitter)


btn.addEventListener('click', () => {
  emitter.emit('event:changeName', { name: input.value })
})

subscribe2(); //Отписался от второго события