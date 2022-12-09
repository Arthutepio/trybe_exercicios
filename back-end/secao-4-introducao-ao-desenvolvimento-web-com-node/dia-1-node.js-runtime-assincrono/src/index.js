const { calculateBMI } = require('./bmi');
const { checkCategoryBMI } = require('./checkCategoryBMI')
const readline = require('readline-sync');

const weight = readline.questionInt('What’ your weight?');
const height = readline.questionFloat('What’ your height?');

const bmi = calculateBMI(weight, height);
console.log(`BMI:  ${bmi.toFixed(2)}`);
checkCategoryBMI(bmi);


