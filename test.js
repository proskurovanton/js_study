//Task 1
const convertCurrency = (sum = 1, currency = 'EUR') => {
    let eur = 0.9;
    let uah = 35;
    let gbp = 0.8
    switch(currency) {
        case 'EUR':
            return sum * eur;
        case 'UAH':
            return sum * uah;
        case 'GBP':
            return sum * gbp;
        default:
            console.log('Entered unsupported currency');
    }
}

convertCurrency(100, 'GBP');

//Task 2
const getDayOfWeek = (day = 1) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(day >= 1 && day <= 7) {
        return daysOfWeek[day-1];
    } else {
        console.log('Please enter number from 1 to 7');
    }
}

getDayOfWeek(1);

//Task 3
const fibonacci = (n = 0) => {
    if(n < 2) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

fibonacci(4);

//Additional task
let attempts = 3;
let randNumber = Math.floor((Math.random() * 10)) + 1;
const getUserAnswer = () => prompt('Enter number from 1 to 10');

const guessNumber = userAnswer => {
    let res = userAnswer();
    if(res === null) {
        return;
    }
    res = Number.parseInt(res);
    if(res !== NaN && res >= 1 && res <= 10) {
        if(res === randNumber) {
            alert('Congratulations! You guessed the number');
        } else if(attempts > 1) {
            if(res < randNumber) {
                attempts--;
                alert(`Too small. ${attempts} attempts left`);
                guessNumber(userAnswer);
            } else {
                attempts--;
                alert(`Too big. ${attempts} attempts left`);
                guessNumber(userAnswer);
            }
        } else {
            alert('You lost, no attempts left');
        }
    } else {
        alert('Invalid value given. Please enter number from 1 to 10');
        guessNumber(userAnswer);
    }
}

guessNumber(getUserAnswer);