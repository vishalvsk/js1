// 1. Print odd numbers in an array:

// Anonymous Function
const printOddNumbers = function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// IIFE
(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2. - Convert all the strings to title caps in a string array:

// Anonymous Function
const convertToTitleCaps = function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

// IIFE
const titleCaps = (function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["hello", "world", "javascript"]);

// 3. - Sum of all numbers in an array:

// Anonymous Function
const sumOfNumbers = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// IIFE
const sum = (function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);

// 4. - Return all the prime numbers in an array:

// Anonymous Function
const getPrimes = function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

// IIFE
const primes = (function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5. - Return all the palindromes in an array:

// Anonymous Function
const getPalindromes = function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};

// IIFE
const palindromes = (function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
})(["madam", "hello", "level", "world"]);

// 6 - Return median of two sorted arrays of the same size:

// Anonymous Function
const getMedian = function (arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

// IIFE
const median = (function (arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
})([1, 2, 3], [4, 5, 6]);

// 7. - Remove duplicates from an array:

// Anonymous Function
const removeDuplicates = function (arr) {
  return [...new Set(arr)];
};

// IIFE
const uniqueArray = (function (arr) {
  return [...new Set(arr)];
})([1, 2, 2, 3, 4, 4, 5]);

// 8. - Rotate an array by k times:

// Anonymous Function
const rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

// IIFE
const rotatedArray = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})([1, 2, 3, 4, 5], 2);

//  as arrow functions:
// 1. - Print odd numbers in an array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2. - Convert all the strings to title caps in a string array:

const convertToTitleCaps = (arr) => {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

const titleCaps = convertToTitleCaps(["hello", "world", "javascript"]);
console.log(titleCaps);

// 3.- Sum of all numbers in an array:

const sumOfNumbers = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const sum = sumOfNumbers([1, 2, 3, 4, 5]);
console.log(sum);

// 4. - Return all the prime numbers in an array:

const getPrimes = (arr) => {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

const primes = getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primes);

// 5. - Return all the palindromes in an array:

const getPalindromes = (arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};

const palindromes = getPalindromes(["madam", "hello", "level", "world"]);
console.log(palindromes);
