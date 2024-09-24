/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

// my solution
var minMovesToSeat = function (seats, students) {
  let counter = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let i = 0;

  while (i < seats.length) {
    let seat = seats[i];
    let student = students[i];

    while (seat < student) {
      seat++;
      counter++;
    }

    while (seat > student) {
      student++;
      counter++;
    }

    i++;
  }

  return counter;
};

/**
 * Best solution
  var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < seats.length; i++) {
      sum += Math.abs(students[i] - seats[i])
    }
    return sum
  };
 *
 */

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
