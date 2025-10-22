let array = [
  { nume: 'Bogdan', varsta: 23 },
  { nume: 'Andrei', varsta: 19 },
  { nume: 'Mihai', varsta: 25 },
  { nume: 'Rares', varsta: 21 }
];

let sortArray = (array, key) => {
  return array.sort((a, b) => {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return a[key] - b[key];
    }
    return a[key].toString().localeCompare(b[key].toString(), 'ro', { sensitivity: 'base' });
  });
};

console.log("Array ul sortat dupa nume: ");
console.log(sortArray(array, 'nume'));