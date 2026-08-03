// Brute force
function findRestaurant2(list1: string[], list2: string[]): string[] {
  const result: string[] = [];

  const map: Map<string, { count: number; index: number }> = new Map();
  const maxLength = Math.max(list1.length, list2.length);

  for (let i = 0; i < maxLength; i++) {
    const text1 = list1[i];
    const text2 = list2[i];

    if (text1) {
      map.set(text1, {
        count: (map.get(text1)?.count || 0) + 1,
        index: (map.get(text1)?.index || 0) + i
      });
    }

    if (text2) {
      map.set(text2, {
        count: (map.get(text2)?.count || 0) + 1,
        index: (map.get(text2)?.index || 0) + i
      });
    }
  }

  let minIndex = Infinity;

  for (let { count, index } of map.values()) {
    if (count > 1) minIndex = Math.min(minIndex, index);
  }

  for (let [name, val] of map.entries()) {
    if (val.count > 1 && minIndex === val.index) {
      result.push(name);
    }
  }

  return result;
}

// THE BEST SOLUTION
function findRestaurant(list1: string[], list2: string[]): string[] {
  const result: string[] = [];
  const map = new Map();

  let minSum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    const index1 = map.get(list2[i]);

    if (index1 === undefined) continue;

    const sum = index1 + i;

    if (sum < minSum) {
      minSum = sum;
      result.length = 0;
      result.push(list2[i]);
    } else if (sum === minSum) {
      result.push(list2[i]);
    }
  }

  return result;
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
);
