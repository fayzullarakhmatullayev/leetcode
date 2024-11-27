/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
  while (students.length > 0) {
    if (!students.includes(sandwiches[0])) break;

    if (students[0] !== sandwiches[0]) {
      students.push(students.shift());
    } else {
      students.shift();
      sandwiches.shift();
      // console.log(students, sandwiches);
    }
  }
  return students.length;
};
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
