const Animal = require('./animal')
const readline = require('readline')
const Events = require('./events')

let simStarted = false

const commands = [
  'help - Display available commands',
  'add - Adds an animal into the world',
  'next - Advances to the next day',
  'quit - Stops the program',
  'clear - Clear all animals',
]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const animals = []

function addAnimal() {
  if (animals.length < 20) {
    const randomAnimal = Events.spawnAnimal()
    animals.push(randomAnimal)
    console.log(randomAnimal)
  } else {
    console.log('The maximum number of animals (20) has been reached.')
  }
}

function advanceDay() {
  for (const animal of animals) {
    if (animal.alive) {
      Events.sleep(animal)
      Events.drink(animal)
      Events.eat(animal)
      Events.roam(animal)
      Events.ageUp(animal)
      console.log(
        `${animal.name}: Speed - ${animal.speed}, Hunger - ${animal.hunger}, Thirst - ${animal.thirst}, Energy - ${animal.energy}, Age - ${animal.age}`
      )
    }
  }
}

function playGame() {
  if (!simStarted) {
    simStarted = true
    console.log('Simulation Started!')
    console.log('Available commands:')
    for (const command of commands) {
      console.log(`- ${command}`)
    }
  }
  rl.question('Enter your command: ', (command) => {
    if (command === 'add') {
      addAnimal()
    }
    if (command === 'quit') {
      rl.close()
      return
    }
    if (command === 'next') {
      advanceDay()
    }
    if (command === 'clear') {
      if (animals.length > 0) {
        for (const animal of animals) {
          animal.alive = false
        }
        animals.splice(0)
        console.log('All animals have been removed')
      } else {
        console.log('There are no animals to clear')
      }
    }
    if (command === 'help') {
      console.log('Available commands:')
      for (const cmd of commands) {
        console.log(`- ${cmd}`)
      }
    }

    playGame()
  })
}

playGame()
