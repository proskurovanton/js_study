// Task 1
let grade;
let gradeValue = 71;
if (typeof gradeValue === 'number') {
    gradeValue = Math.floor(gradeValue);
    if ( gradeValue >= 90 && gradeValue <= 100) {
        grade = 'A';
    } else if (gradeValue >= 70 && gradeValue <= 89) {
        grade = 'B';
    } else if (gradeValue >= 50 && gradeValue <= 69) {
        grade = 'C'
    } else if (gradeValue >= 1 && gradeValue < 50) {
        grade = 'E';
    } else {
        console.log('Entered grade value is not valid. It should be between 1 and 100')
    }
} else {
    console.log('Given grade value is not a number');
}

// Task 2
let action = 'multiply';
let firstOperand = 4;
let secondOperand = 5
switch (action) {
    case 'add':
        console.log(firstOperand + secondOperand);
        break;
    case 'subtract':
        console.log(firstOperand - secondOperand);
        break;
    case 'multiply':
        console.log(firstOperand * secondOperand);
        break;
    case 'divide':
        console.log(firstOperand / secondOperand);
        break;
    default:
        console.log('Wrong action given');
}

// Task 3
let a= 312039;
a % 2 === 0 ? console.log('pair') : console.log ('not pair');