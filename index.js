console.log(checkSheep(3, 3, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
// false
console.log(checkSheep(3, 3, [[0, 0, 1], [0, 0, 1], [0, 1, 1]]));
// true
console.log(checkSheep(4, 4, [[0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]));
// true
console.log(checkSheep(4, 4, [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]));
// true
console.log(checkSheep(4, 4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));
// false
console.log(checkSheep(4, 4, [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]));
// true
console.log(checkSheep(4, 4, [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1]]));
// true