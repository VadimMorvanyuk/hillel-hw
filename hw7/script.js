const calculate = () => {
    let action = prompt("What action are you going to do? '+' '-' '*' '/'"),
    firstNumber = +prompt("Enter the first number"),
    secondNumber = +prompt("Enter the second number");
    switch(action){
        case '+':
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case '-':
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case '*':
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case '/':
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
    }
}
calculate()

    // Створити скрипт який повинен виконувати наступне:
    // питаємо у користувача, що він хоче зробити (add, sub, mult, div);
    // питаємо у користувача перше число;
    // запитуємо у користувача друге число;
    // виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").