// Task 1. Reverse array

const numbers = [1, 2, 3, 4, 5, 6];
const reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers);
// В некоторых случаях важно не менять исходный массив, т.к. один и тот же массив может использоваться в нескольких частей программы и изменение данных массива в одном месте - может сломать логику в другом


// Task 2. Find max and min number

//Цикл
const numbersTwo = [3, 67, 15, 89, 24, 7, 101, 36];
let maxNumber = numbersTwo[0];
let minNumber = numbersTwo[0];
for (let i = 0; i < numbersTwo.length; i++){
    if (maxNumber < numbersTwo[i])
        maxNumber = numbersTwo[i];
    if (minNumber > numbersTwo[i])
        minNumber = numbersTwo[i];
}
console.log( 'Max number: ', maxNumber);
console.log('Min number: ', minNumber);

//Объект Math
let maxNumberTwo = Math.max(...numbersTwo);
let minNumberTwo = Math.min(...numbersTwo);

console.log( 'Max number: ', maxNumberTwo);
console.log('Min number: ', minNumberTwo);


// Task 3. Fibonacci array

const startIndex = 3;
const length = 7;
const fibonacci = getFibonacci(startIndex, length);
console.log(...fibonacci);

function getFibonacci(startIndex, length){
    if (length <= 0 || startIndex < 0) {
        return [];
    }

    const result = Array(length);
    let currentArrayIndex = 0;
    let num1 = 0, num2 = 1, current = 1;

    for (let index = 0; index < startIndex + length; index++) {
        if (index === 0) {
            current = 0;
        }
        else if (index === 1) {
            current = 1;
        }
        else {
            current = num1 + num2;
            num1 = num2;
            num2 = current;
        }

        if (index >= startIndex) {
            result[currentArrayIndex++] = current;
        }
    }

    return result;
}

// Task 4. Bulls and Cows
const secret = 3487;
const guess = 3794;

const secretArr = Array.from(String(secret));
const guessArr = Array.from(String(guess));

const amountSameValueAndPosition = secretArr.filter(
    (digit, index) => digit === guessArr[index]).length;

const amountSameValue = secretArr.filter(
    (digit, index) => digit !== guessArr[index] && guessArr.includes(digit)).length;

console.log("Same position: ", amountSameValueAndPosition);
console.log("Same value but different position: ", amountSameValue);

//Task 5. Sort and filter users

const users = [
    { name: "Alex", age: 25, city: "Warsaw" },
    { name: "Maria", age: 32, city: "Gdansk" },
    { name: "John", age: 19, city: "Berlin" },
    { name: "Oleg", age: 41, city: "Warsaw" },
    { name: "Anna", age: 25, city: "Krakow" }
];

let sortAgeAsc = [...users].sort((a,b) => a.age - b.age);
console.log('Users sorted by age ascending:');
console.log(sortAgeAsc);

let sortAgeDesc = [...users].sort((a,b) => b.age - a.age);
console.log('Users sorted by age descending:');
console.log(sortAgeDesc);

let sortNameAlph = [...users].sort((a,b) => a.name.localeCompare(b.name));
console.log('Users sorted by name:');
console.log((sortNameAlph));

let newArrayNames = users.map(user => user.name);
console.log('User names:');
console.log(newArrayNames);

let newArrayAbove25 = users.filter(user => user.age > 25);
console.log('Users older than 25:');
console.log(newArrayAbove25);

let newArrayFirstWarsaw = users.find(user => user.city === "Warsaw");
console.log('First user from Warsaw:');
console.log(newArrayFirstWarsaw)

// Task 6. Remove duplicates and analyze products

const products = [
    { id: 1, title: "Phone", price: 1200, category: "electronics" },
    { id: 2, title: "Laptop", price: 2500, category: "electronics" },
    { id: 3, title: "Book", price: 40, category: "books" },
    { id: 4, title: "Phone", price: 1200, category: "electronics" },
    { id: 5, title: "Pen", price: 5, category: "stationery" },
    { id: 6, title: "Book", price: 40, category: "books" }
];

const uniqueProducts = products.filter((product, index, self) => {
    return self.findIndex(p => p.title === product.title && p.price === product.price) === index;
});
console.log("Уникальные товары:");
console.log(uniqueProducts);

const titles = uniqueProducts.map(product => product.title);
console.log("Названия товаров:");
console.log(titles);

const uniqueCategory = [...new Set(uniqueProducts.map(product => product.category))];
console.log("Уникальные категории:");
console.log(uniqueCategory);

const totalPrice = uniqueProducts.reduce((sum, product) => sum + product.price, 0);
console.log("Общая стоимость:");
console.log(totalPrice);

const categoryCount = uniqueProducts.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {});
console.log("Количество товаров по категориям:");
console.log(categoryCount);

const sampleProduct = uniqueProducts[2];
console.log("Анализ товара:", sampleProduct);
console.log("  Object.keys() →", Object.keys(sampleProduct));
console.log("  Object.values() →", Object.values(sampleProduct));
console.log("  Object.entries() →", Object.entries(sampleProduct));


