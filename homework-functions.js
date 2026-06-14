//Task 1. Dice game

const playDiceGame = (playersCount, throwsCount) => {
    const result = [];
    // Бросаем кубик для каждого игрока, суммируем значения бросков для каждого игрокa, записываем в массив throws через push
    for (let i = 1; i <= playersCount; i++){
        let total = 0;
        const throws = [];

        for (let j = 0; j < throwsCount; j++){
            const roll = Math.floor(Math.random() * 6) + 1;
            throws.push(roll);
            total += roll;
        }
        console.log(`Player ${i} throws: ${throws.join(', ')}. Total: ${total}`);
        result.push({ name: `Player ${i}`, total });
    }
    // Поиск максимального Total (сумма очков всех throwsCount) среди игроков
    let maxTotal = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i].total > maxTotal){
            maxTotal = result[i].total;
        }
    }
    // Поиск игрока(игроков), у которого(которых) текущее кол-во очков равно maxTotal. Записываем в массив winner через push
    const winner = [];
    for (let i = 0; i < result.length; i++){
        if (result[i].total === maxTotal){
            winner.push(result[i].name);
        }
    }

    console.log('');

    if (winner.length === 1) {
        console.log(`Winner: ${winner[0]} with ${maxTotal} points`);
    } else {
        console.log(`Draw between players: ${winner.join(', ')}`);
    }
};
playDiceGame(3, 5);


//Task 2. Split number into random parts

const splitNumber = (number, partsCount) => {

const numbers = [];
let lastNumber = number; //Последнее число - это будущий остаток. Первоначальное значение остатка равно number

for (let i = 0; i < partsCount - 1; i++){ //Кол-во прохождения цикла равно partsCount - 1
    const number = Math.floor(Math.random() * (lastNumber - (partsCount - i - 1))) + 1;
    numbers.push(number);
    lastNumber -= number;
}
numbers.push(lastNumber);

console.log(numbers);
return numbers;
};

splitNumber(15,3);


// Task 3. Count Friday the 13th

const countFriday13 = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const fridayDate = [];

    // Начинаем с 13-го числа стартового месяца
    const current = new Date(start.getFullYear(), start.getMonth(), 13);

    while (current <= end) {
        if (current.getDay() === 5) {
            fridayDate.push(new Date(current));
        }
        // Переходим к 13-му следующего месяца
        current.setMonth(current.getMonth() + 1);
    }

    console.log('Friday 13th dates:');
    fridayDate.forEach(date => console.log(date.toDateString()));
    console.log(`\nTotal Friday 13th count: ${fridayDate.length}`);
}

countFriday13("2000-01-01", "2020-12-31");