// print n to 1 numbers
function print(n) {
  if (n < 1) return;
  console.log(n);
  print(--n);
}
// print(4);

// print 1 to n numbers
let n = 5;
function printOneton(x) {
  if (x > n) return;
  // console.log(x);
  x++;
  printOneton(x);
}
printOneton(1);

// print sum of first n numbers
function sum(n) {
  if(n<1) return 0;
  return n + sum(n-1);
}
console.log(sum(5));

// sum of all numbers in array
const arr = [1, 2, 3, 4, 5, 6];
function sumAll(n) {
  if(n==0) return arr[0];
  return arr[n] + sumAll(n-1);
}
console.log(sumAll(arr.length-1));

// sum of odd numbers in array
function sumOdd(n) {
  let isOdd = arr[n]%2 != 0;
  if(n==0) return isOdd ? arr[n] : 0;
  return (isOdd ? arr[n] : 0) + sumOdd(n-1);
}
console.log(sumOdd(arr.length-1));

// factorial using recursion
function findFactorial(n) {
  if(n==1) return 1;
  return n * findFactorial(n-1);
}
console.log(findFactorial(5));

// Power of Two
function isPowerOfTwo(n) {
    if(n==1) return true;
    else if((n%2!==0) || n<1) return false;
    return isPowerOfTwo(n/2);
};
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(8));

// Fibonacci Number
function fibonacci(n) {
  if(n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6)); //8 
