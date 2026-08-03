function findRestaurant(list1: string[], list2: string[]): string[] {
  const result: string[] = [];

  const map: Map<string, number> = new Map();
  const maxLength = Math.max(list1.length, list2.length);

  for (let i = 0, j = 0; i < maxLength; i++, j++) {
    const text1 = list1[i];
    const text2 = list2[j];

    if (text1) {
      map.set(text1, (map.get(text1) || 0) + 1);
    }

    if (text2) {
      map.set(text2, (map.get(text2) || 0) + 1);
    }
  }

  for (let [name, val] of map.entries()) {
    if (val > 1) {
      result.push(name);
    }
  }

  return result;
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
  )
);
