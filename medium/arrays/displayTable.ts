// function displayTable(orders: string[][]): string[][] {
//   const map: Map<string, Map<string, number>> = new Map();

//   const foods: Set<string> = new Set(orders.map((item) => item[2]).sort());

//   for (let order of orders) {
//     const [_, table, food] = order;

//     const foodsMap: Map<string, number> = new Map();

//     for (const food of foods.values()) {
//       foodsMap.set(food, 0);
//     }

//     if (!map.has(table)) {
//       map.set(table, foodsMap);
//     }

//     map.get(table)?.set(food, (map.get(table)?.get(food) || 0) + 1);
//   }

//   const tables = Array.from(map.keys()).sort((a, b) => +a - +b);

//   const answer: string[][] = [['Table', ...foods]];
//   let count = 1;

//   for (let table of tables) {
//     answer[count] = [table];
//     for (let val of map.get(table)?.values()!) {
//       answer[count].push(String(val));
//     }

//     count++;
//   }

//   return answer;
// }

function displayTable(orders: string[][]): string[][] {
  const tableMap: Map<string, Map<string, number>> = new Map();
  const foodSet: Set<string> = new Set();

  for (let [_, table, food] of orders) {
    foodSet.add(food);

    if (!tableMap.has(table)) {
      tableMap.set(table, new Map());
    }
    const foodMap = tableMap.get(table)!;
    foodMap.set(food, (foodMap.get(food) || 0) + 1);
  }
  const foods = Array.from(foodSet).sort();

  const tables = Array.from(tableMap.keys()).sort((a, b) => Number(a) - Number(b));

  const result: string[][] = [['Table', ...foods]];

  for (let table of tables) {
    const row: string[] = [table];
    const foodMap = tableMap.get(table);

    for (const food of foods) {
      row.push(String(foodMap?.get(food) || 0));
    }

    result.push(row);
  }

  return result;
}

console.log(
  displayTable([
    ['David', '3', 'Ceviche'],
    ['Corina', '10', 'Beef Burrito'],
    ['David', '3', 'Fried Chicken'],
    ['Carla', '5', 'Water'],
    ['Carla', '5', 'Ceviche'],
    ['Rous', '3', 'Ceviche']
  ])
);
