// calculator.js
const readline = require('readline');
const StringCalculator = require('./StringCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new StringCalculator();

function promptUser() {
  rl.question('Enter numbers (or type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    try {
      const result = calculator.add(input);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.error(error.message);
    }

    promptUser(); // Prompt the user again
  });
}

promptUser();
