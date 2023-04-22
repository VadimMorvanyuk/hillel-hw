function sum() {
  let num = 0;
  return function (x) {
    return (num += x);
  };
}

const add = sum();

console.log(add(3));
console.log(add(5));
console.log(add(20));
