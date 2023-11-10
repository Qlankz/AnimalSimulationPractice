const Animal = require('./animal')
const readline = require('readline')
let simStarted = false

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const animals = []

function addAnimal() {
  if (animals.length < 20) {
    const randomAnimal = Animal.newRandomAnimal()
    animals.push(randomAnimal)
    console.log(randomAnimal)
  } else {
    console.log('The maximum number of animals (20) has been reached.')
  }
}

function advanceDay() {
  let days = 1
  for (const animal of animals) {
    animal.eat()
    animal.drink()
    animal.roam()
    animal.sleep()
    console.log(
      `${animal.name}: Hunger - ${animal.hunger}, Thirst - ${animal.thirst}, Energy - ${animal.energy}`
    )
  }
  days++
}

function playGame() {
  if (!simStarted) {
    simStarted = true
    console.log('Simulation Started!')
  }
  rl.question('Enter your command: ', (command) => {
    if (command === 'add') {
      addAnimal()
    }
    if (command === 'quit') {
      rl.close()
      return
    }
    if (command === 'nextday') {
      advanceDay()
    }
    playGame()
  })
}

playGame()
