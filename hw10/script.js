// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let arrLength = +prompt('Enter array length');
let arr = [];

console.log(arr);

for(let i = 0; i < arrLength; i++){
    arr.push(prompt('Enter any number'));
}

console.log(arr);

arr.sort((a,b) => a - b);

console.log(arr);

arr.splice(1,3);

console.log(arr);