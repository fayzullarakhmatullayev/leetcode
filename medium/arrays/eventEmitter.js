class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);

    return {
      unsubscribe: () => {
        const callbacks = this.events.get(eventName);
        if (callbacks) {
          this.events.set(
            eventName,
            callbacks.filter((cb) => cb !== callback)
          );
        }
      }
    };
  }

  emit(eventName, args = []) {
    const callbacks = this.events.get(eventName) || [];
    return callbacks.map((callback) => callback(...args));
  }
}

const emitter = new EventEmitter();
emitter.subscribe('firstEvent', function cb1(...args) {
  return args.join(',');
});
console.log(emitter.emit('firstEvent', [1, 2, 3])); // ["1,2,3"]
console.log(emitter.emit('firstEvent', [3, 4, 6])); // ["3,4,6"]

// https://leetcode.com/problems/event-emitter
