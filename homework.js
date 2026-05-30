// Task 1 - объявление переменных

const nameUser = 'Misha';
let ageUser = 18 ;
let isStudent = true;
let cityUser;
let salaryUser = null;

console.log(nameUser, ageUser, isStudent, cityUser, salaryUser);

// Task 2 - проверка типов данных

console.log(typeof nameUser); // string
console.log(typeof ageUser); // number
console.log(typeof isStudent); // bool
console.log(typeof cityUser); // undefined
console.log(typeof salaryUser); // object
// null - тип object, т.к. это исторический баг внутри JS

// Task 3 - undefined vs null

let name;
let surname = null;

console.log(name);
console.log(surname);
console.log(typeof name === typeof undefined);
console.log(typeof surname === typeof null);
/*
undefined - объявленная переменная, но не инициализированная
null - намеренное отсутствие значения у переменной (пустота)
*/

// Task 4 - Boolean, truthy и falsy значения

let emptyString = '';
let zeroNumber = 0;
let nullValue = null;
let emptyValue;
let cityName = 'Warszawa';
let positiveNumber = 29;

console.log(Boolean(emptyString)); // false
console.log(Boolean(zeroNumber)); // false
console.log(Boolean(nullValue)); // false
console.log(Boolean(emptyValue)); // false
console.log(Boolean(cityName)); // true
console.log(Boolean(positiveNumber)); // true

// Task 5 - Number и преобразование типов

let numberOne = 24;
let numberTwo = 2.5;
let stringNumber = "23"
let stringWords = "I wanna be free";

console.log(typeof numberOne);
console.log(typeof numberTwo);
console.log(typeof stringNumber);
console.log(typeof stringWords);

console.log(Number(stringNumber));
console.log(Number(stringWords));
// JS пытается преобразовать строку в число, но не может, т.к. в ней нет цифр, поэтому JS возвращает NaN (результат не является числом)

// Task 6 - Проблема точности Number

let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2;

console.log(sum)
console.log (sum === 0.3)
// числа с плавающей точкой хранятся в двоичной системе и не имеют точного представления в ней, поэтому при сложении накапливается погрешность

// Task 7 - Работа со строками

let lastString = '    Poll wants  to buy new PC    '

console.log(lastString.length);
console.log(lastString.trim());
console.log(lastString.toUpperCase());
console.log(lastString.toLowerCase());
console.log(lastString.includes('Poll'));
console.log(lastString.indexOf('PC'))

let newLastString = ` JS ${lastString} is the best`;
console.log(newLastString)


