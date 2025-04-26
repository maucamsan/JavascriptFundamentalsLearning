// First challenge
let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;


let BMIMark = Bmi(massMark, heightMark);
let BMIJohn = Bmi(massJohn, heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

function Bmi(mass, height)
{
    return mass / (height * height);
}

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);


// Extra

const readline = require('readline');
let height = 0;
let mass = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your height? ", (height) => {
    this.height = height;
    rl.question("What is your mass? ", (mass) => {
        this.mass = mass;
        console.log("Your BMI is: " + Bmi(mass, height));
        rl.close();
    });
});

