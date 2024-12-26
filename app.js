const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

function getAverageAge(arr) {
  let totalAge = 0;
  for (let i = 0; i < arr.length; i++) {
    totalAge += arr[i].age;
  }
  return totalAge / arr.length;
}

console.log(getAverageAge(people));

// 2-m

const people2 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

function addIsMarried(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].isMarried = arr[i].age >= 25;
  }
  return arr;
}
console.log(addIsMarried(people2));

// 3-m\
const people3 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];
function getNameMaxMinAge(arr) {
  let maxAge = arr[0].age;
  let minAge = arr[0].age;
  let maxName = arr[0].name;
  let minName = arr[0].name;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > maxAge) {
      maxAge = arr[i].age;
      maxName = arr[i].name;
    }
    if (arr[i].age < minAge) {
      minAge = arr[i].age;
      minName = arr[i].name;
    }
  }
  return [maxName, minName];
}

console.log(getNameMaxMinAge(people3));

// 4-m
const input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
function groupKeysByValues(obj) {
  let result = {};
  for (let key in obj) {
    let value = obj[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(parseInt(key));
  }
  return result;
}
console.log(groupKeysByValues(input));

// 5-m
const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };
function getUniqueKeys(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    if (!(key in obj2)) {
      result[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (!(key in obj1)) {
      result[key] = obj2[key];
    }
  }
  return result;
}

console.log(getUniqueKeys(obj1, obj2));

// uy 2-m
function createSquaresObject(n) {
  let result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = i * i;
  }
  return result;
}

console.log(createSquaresObject(5));

// uy 3-m
const obj = createSquaresObject(5);

function getSumOfKeysAndValues(obj) {
  let keysSum = 0;
  let valuesSum = 0;

  for (let key in obj) {
    keysSum += Number(key);
    valuesSum += obj[key];
  }

  return keysSum + valuesSum;
}

console.log(getSumOfKeysAndValues(obj));

// uy 4-m
const arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

function createLengthObject(arr) {
  let lengths = {};

  for (let str of arr) {
    lengths[str] = str.length;
  }

  return lengths;
}

console.log(createLengthObject(arr));

// uy 5-m
const products = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

function getTotalPrice(products) {
  let total = 0;

  for (let key in products) {
    total += products[key];
  }

  return total;
}

console.log(getTotalPrice(products));
