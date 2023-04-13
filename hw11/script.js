// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// 2.Знайти мінімальний елемент масиву та його порядковий номер.
// 3.Знайти максимальний елемент масиву та його порядковий номер.
// 4.Визначити кількість негативних елементів.
// 5.Знайти кількість непарних позитивних елементів.
// 6.Знайти кількість парних позитивних елементів.
// 7.Знайти суму парних позитивних елементів.
// 8.Знайти суму непарних позитивних елементів.
// 9.Знайти добуток позитивних елементів.
// 10.Знайти найбільший серед елементів масиву, ост альні обнулити.

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

console.log("Task 1")
const task1 = () => {
    let positiveSum = 0;
    let positiveLength = 0;
    
    for(let i = 1; i <= arr.length; i++){
        i > 0 ? positiveSum += i && positiveLength++ : positiveSum;
    }

    console.log(`Sum of positive numbers: ${positiveSum}`); 
    console.log(`Length of positive numbers: ${positiveLength}`); 
    
}
task1();

console.log("Task 2")
const task2 = () => {
    let minNum = 0;
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minNum){
        	minNum = arr[i];
            index = i;
        }
    }
    console.log(`Minimun number is: ${minNum}, its index is: ${index}`)
}
task2()

console.log("Task 3")
const task3 = () => {
    let maxNum = 0;
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNum){
        	maxNum = arr[i];
            index = i;
        }
    }
    console.log(`Maximum number is: ${maxNum}, its index is: ${index}`)
}
task3()

console.log("Task 4")
const task4 = () => {
    let negativeCounter = 0;
    for(let i of arr){
        i < 0 ? negativeCounter++ : negativeCounter; 
    }
    console.log(negativeCounter)
}
task4()

console.log("Task 5")
const task5 = () => {
    let positiveOddCounter = 0;
    for(let i of arr){
        i > 0 && i % 2 == 1 ? positiveOddCounter++ : positiveOddCounter; 
    }
    console.log(positiveOddCounter)
}
task5()

console.log("Task 6")
const task6 = () => {
    let positiveEvenCounter = 0;
    for(let i of arr){
        i > 0 && i % 2 == 0 ? positiveEvenCounter++ : positiveEvenCounter; 
    }
    console.log(positiveEvenCounter)
}
task6()

console.log("Task 7")
const task7 = () => {
    let positiveSum = 0;
    for(let i of arr){
        i > 0 && i % 2 == 0 ? positiveSum += i : positiveSum;
    }
    console.log(positiveSum)
}
task7()

console.log("Task 8")
const task8 = () => {
    let negativeSum = 0;
    for(let i of arr){
        i > 0 && i % 2 == 1 ? negativeSum += i : negativeSum;
    }
    console.log(negativeSum)
}
task8()

console.log("Task 9")
const task9 = () => {
    let multiplyOfNumbers = 1;
    for(let i of arr){
        i > 0 ? multiplyOfNumbers *= i : multiplyOfNumbers;
    }
    console.log(multiplyOfNumbers)
}
task9()

console.log("Task 10")
const task10 = () => {
    let maxNum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNum) maxNum = arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== maxNum) arr[i] = null;
      }
console.log(maxNum, arr);
}
task10()

