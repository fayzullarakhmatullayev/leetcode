/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let x = capacity;
  let i = 0;

  while (i < plants.length) {
    if (x < plants[i]) {
      steps += i * 2;
      x = capacity;
    }

    x -= plants[i];
    steps++;
    i++;
  }

  return steps;
};

console.log(wateringPlants([2, 2, 3, 3], 5));

/**
 *  Input: plants = [2,2,3,3], capacity = 5
    Output: 14
    Explanation: Start at the river with a full watering can:
    - Walk to plant 0 (1 step) and water it. Watering can has 3 units of water.
    - Walk to plant 1 (1 step) and water it. Watering can has 1 unit of water.
    - Since you cannot completely water plant 2, walk back to the river to refill (2 steps).
    - Walk to plant 2 (3 steps) and water it. Watering can has 2 units of water.
    - Since you cannot completely water plant 3, walk back to the river to refill (3 steps).
    - Walk to plant 3 (4 steps) and water it.
    Steps needed = 1 + 1 + 2 + 3 + 3 + 4 = 14.
 * 
 */
