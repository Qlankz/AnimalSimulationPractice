const animalMod = require('./animal')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function playGame() {
  // Your game logic goes here
  rl.question('Enter your command: ', (command) => {
    // Process user input
    if (command === 'quit') {
      rl.close()
      return
    }

    // Continue the game or handle user commands
    // Example: console.log(`You entered: ${command}`);
    playGame()
  })
}

playGame()
