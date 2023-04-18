/* Task 1 */

const arr = ["abc", 1, 6, {}, 9, false, "str", true, 2, null, 8, 3, false];
const averageNum = () => {
  let arrOfNumbers = [];
  let sumOfNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") arrOfNumbers.push(arr[i]);
  }
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sumOfNumbers += arrOfNumbers[i];
  }
  let result = sumOfNumbers / arrOfNumbers.length;
  console.log(result);
};
averageNum();

/* Task 1 */

/* Task 2 */

const doMath = (x,znak,y) => {
	let firstNum = +prompt('Enter first number'),
  		secondNum = +prompt('Enter second number'),
        action = prompt('Enter action between numbers');
  switch(action){
  	case '+':
    	console.log(firstNum + secondNum);
      break;
    case '-':
    	console.log(firstNum - secondNum);
      break;
    case '*':
    	console.log(firstNum * secondNum);
      break;
    case '/':
    	console.log(firstNum / secondNum);
      break;
    case '%':
    	console.log(firstNum % secondNum);
      break;
    case '^':
    	console.log(Math.pow(firstNum,secondNum));
      break;
    default:
        console.log('Wrong action!')
  }
}
doMath();

/* Task 2 */

/* Task 3 */

const fillInArray = () => {
    let lengthOfArr = +prompt("Enter length of main Array");
    let lengthofItem = +prompt("Enter length of every item");
    let arr = [];
    for(let i = 0; i < lengthOfArr; i++) {
      arr[i] = [];
      for(let j = 0; j < lengthofItem; j++) {
        arr[i][j] = +prompt("Enter any num");
      }
    }
    console.log(arr);
  };
  fillInArray();

/* Task 3 */

/* Task 4 */

const deleteSymbols = (str, letters) => {
  str = prompt("Enter any string");
  letters = prompt("Enter any letters").split("");
  let arr = [];
  for (let i = 0; i <= str.length; i++) {
    if (letters.includes(str[i])) {
      arr.push("");
    } else {
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""));
};
deleteSymbols();

/* Task 4 */



   