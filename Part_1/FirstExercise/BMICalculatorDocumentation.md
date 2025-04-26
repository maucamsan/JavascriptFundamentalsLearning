# First challenge on the Udemy's course the complete javascript course

## Challenge 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

### My solution

```javascript
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

```

## Extra

I wanted to get the prompt from a user. Since I am not working with the browser's engine (yet) I decided to get the input using Node.js. So, looking for how to get the user's input, I found the [readline module](https://nodejs.org/api/readline.html).

This was the example on the documentation
```javascript
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```

This was my solution:

```javascript
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
```


