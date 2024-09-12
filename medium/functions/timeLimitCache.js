class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, duration) {
    const now = Date.now();
    const expiryTime = now + duration;

    const existingEntry = this.cache.get(key);
    const isUpdate = existingEntry && existingEntry.expiryTime > now;

    if (isUpdate) {
      clearTimeout(existingEntry.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expiryTime, timeoutId });

    return !!isUpdate;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    if (entry && entry.expiryTime > now) {
      return entry.value;
    }

    this.cache.delete(key);
    return -1;
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
      if (entry.expiryTime > now) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }

    return count;
  }
}

// https://leetcode.com/problems/cache-with-time-limit/
