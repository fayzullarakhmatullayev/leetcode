class EventEmitter {
  hash = {};

  subscribe(eventName, callback) {
    return {
      unsubscribe: () => {}
    };
  }

  emit(eventName, args = []) {}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// https://leetcode.com/problems/event-emitter

const obj = {
  key: [1, 2, 3],
  name: 'hello'
};

console.log(obj);
