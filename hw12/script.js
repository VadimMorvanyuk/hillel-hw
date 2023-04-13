const array = [1, 77, 2, 8, 2, 6, 0, 257, 82, 3, 7];

function removeElement(arr, number) {
  let result = arr.splice(number - 1, 1);
  return arr;
}
console.log(removeElement(array, 3));
