// Написати цикли, які зможуть:

// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
// 2.Вивести квадрати чисел від 10 до 20.
// 3.Вивести таблицю множення на 7.
// 4.Знайти суму всіх цілих чисел від 1 до 15.
// 5.Знайти добуток усіх цілих чисел від 15 до 35.
// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10.Визначити кількість його парних дільників.
// 11.Знайти суму його парних дільників.
// 12.Надрукувати повну таблицю множення від 1 до 10.

console.log("Task 1 and 2");
const task1 = () => {
  let str = "";
  for (let i = 10; i <= 20; i++) {
    str += `${i},`; // task 1
    console.log(i ** 2); // task 2
  }
  console.log(str.slice(0, -1));
};
task1();

console.log("Task 3");

const task3 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 7 = ${i * 7}`); // task 3
  }
};
task3();

console.log("Task 4");

const task4 = () => {
  let count = 0;
  for (let i = 1; i <= 15; i++) {
    count += i; // task 4
  }
  console.log(count);
};
task4()

console.log("Task 5");

const task5 = () => {
    let count = 1;
    for (let i = 15; i <= 35; i++) {
        count *= i;
    }
    console.log(count)
}
task5()

console.log("Task 6");

const task6 = () => {
    let count = 0;
    for(let i = 1; i <= 500; i++){
        count += i;
    }
    console.log(count / 500)
}
task6()

console.log("Task 7");

const task7 = () => {
    let arr = [];
    for(let i = 30; i <= 80; i++){
        i % 2 == 0 ? arr.push(i) : arr;
    }
    let sum = arr.reduce((a,b) => a + b);
    console.log(sum);
}
task7()

console.log("Task 8");

const task8 = () => {
    let arr = [];
    for(let i = 100; i <= 200; i++){
        i % 3 == 0 ? arr.push(i) : arr;
    }
    console.log(arr);
}
task8()

console.log("Task 9");

const task9 = () => {
    let arr = [];
    let num = +prompt("Enter any number for task 9");
    for(let i = 1; i <= num; i++){
        num % i == 0 ? arr.push(i) : arr; // task 9
    }
    console.log(`Дільники даного числа: ${arr}`);

    console.log("Task 10");
    let amount = arr.filter(item => item % 2 == 0) // task 10
    console.log(amount.length);

    console.log("Task 11");
    let sum = amount.reduce((a,b) => a + b); // task 11
    console.log(sum)
}
task9()

console.log("Task 12");

const task12 = () => {
    for(let i = 1; i <= 10; i++){
    	for(let j = 1; j <= 10; j++){
      	console.log(`${i} * ${j} = ${i * j}`)
      }    
    }
}
task12()
