//Task 1
const customIsNaN = n => {
    n = +n;
    if (n !== n) {
        return true;
    } else {
        return false;
    }
}
console.log(customIsNaN('a5'));
console.log(isNaN('a5'));

//Task 2
const checkProbabilityTheory = count => {
    if (count <= 0) {
        console.log('Count should be greater than 0');
        return;
    }
    console.log(`Count of generated numbers: ${count}`);
    let countOfPair = 0;
    let countOfNotPair = 0;
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while (count) {
        let generatedNumber = getRandomNumber(100, 1000);
        generatedNumber % 2 === 0 ? countOfPair++ : countOfNotPair++;
        count--;
    }
    let percentage = (countOfPair / countOfNotPair) * 100;
    console.log(`Count of pair numbers: ${countOfPair}`);
    console.log(`Count of not pair numbers: ${countOfNotPair}`);
    console.log(`Percentage of pair to not pair: ${percentage}%`);
}

checkProbabilityTheory(5000);

//Task 3
let res = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        res += i;
    }
}
console.log(res);

//Additional task
const sumIntegersInString = userString => {
    let sum = 0;
    let i = 0;
    while (i < userString.length) {
        if (parseInt(userString.charAt(i)) || (userString.charAt(i) === '-' && parseInt(userString.charAt(i+1)))) {
            for (let j = i + 1; j <= userString.length; j++) {
                if(!parseInt(userString.charAt(j)) || j === userString.length) {
                    sum += +userString.slice(i, j);
                    i = --j;
                    break;
                }
            }
        }
        i++;
    }
    return sum;
}

console.log(sumIntegersInString('-  a !$ asd 0123.45px-67 8.9'))