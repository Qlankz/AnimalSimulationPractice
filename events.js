function roam(Animal) {
  if (Animal.alive) {
    if (Animal.age > 9) {
      Animal.energy -= 2
      Animal.thirst -= 2
      Animal.hunger -= 2
      Animal.energy = Animal.constrainValue(Animal.energy, 0, 100)
      Animal.thirst = Animal.constrainValue(Animal.thirst, 0, 100)
      Animal.hunger = Animal.constrainValue(Animal.hunger, 0, 100)
      console.log('Hello, World')
    }
  }
}

function breed(Animal) {}

function eat(Animal) {
  if (Animal.alive) {
    if (Animal.hunger <= 0) {
      Animal.hunger = 0
      Animal.alive = false
      console.log(`A ${Animal.name} has died from hunger`)
    } else {
      console.log(`The ${Animal.name} is eating`)
      Animal.hunger += Math.floor(Math.random() * 15) - 5
      Animal.energy += Math.floor(Math.random() * 12) - 5
      Animal.hunger = Animal.constrainValue(Animal.hunger, 0, 100)
      Animal.energy = Animal.constrainValue(Animal.energy, 0, 100)
    }
  }
}

function drink(Animal) {
  if (Animal.alive) {
    if (Animal.thirst <= 0) {
      Animal.thirst = 0
      Animal.alive = false
      console.log(`A ${Animal.name} has died from thirst`)
    } else {
      console.log(`The ${Animal.name} is drinking`)
      Animal.thirst += Math.floor(Math.random() * 12) - 5
      Animal.energy += Math.floor(Math.random() * 11) - 5
      Animal.thirst = Animal.constrainValue(Animal.thirst, 0, 100)
      Animal.energy = Animal.constrainValue(Animal.energy, 0, 100)
    }
  }
}

function sleep(Animal) {
  if (Animal.alive) {
    console.log(`The ${Animal.name} is sleeping`)
    Animal.energy += Math.floor(Math.random() * 15) - 5
    Animal.energy = Animal.constrainValue(Animal.energy, 0, 100)
  }
}

function ageUp(Animal) {
  if (Animal.alive) {
    Animal.age += 1
    if (Animal.age > 10) {
      Animal.alive = false
      console.log(`A ${Animal.name} has died of old age`)
    }
  }
}

module.exports = {
  roam,
  breed,
  eat,
  drink,
  sleep,
  ageUp,
}
