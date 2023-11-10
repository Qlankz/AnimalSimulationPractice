class Animal {
  constructor(name, hunger, thirst, energy, alive) {
    this.name = name
    this.hunger = this.constrainValue(hunger, 0, 100)
    this.thirst = this.constrainValue(thirst, 0, 100)
    this.energy = this.constrainValue(energy, 0, 100)
    this.alive = alive
  }

  static newRandomAnimal() {
    const animalNames = [
      'Lion',
      'Elephant',
      'Giraffe',
      'Bunny',
      'Tiger',
      'Bear',
    ]

    const name = animalNames[Math.floor(Math.random() * animalNames.length)]
    let hunger = Math.floor(Math.random() * 100)
    let thirst = Math.floor(Math.random() * 100)
    let energy = Math.floor(Math.random() * 100)

    console.log(`A new ${name} was born onto the lands`)
    return new Animal(name, hunger, thirst, energy, true)
  }

  eat() {
    if (this.alive) {
      if (this.hunger <= 0) {
        this.hunger = 0
        this.alive = false
        console.log(`A ${this.name} has died from hunger`)
      } else {
        console.log(`The ${this.name} is eating`)
        this.hunger += Math.floor(Math.random() * 15) - 5
        this.energy += Math.floor(Math.random() * 12) - 5
        this.hunger = this.constrainValue(this.hunger, 0, 100)
        this.energy = this.constrainValue(this.energy, 0, 100)
      }
    }
  }

  drink() {
    if (this.alive) {
      if (this.thirst <= 0) {
        this.thirst = 0
        this.alive = false
        console.log(`A ${this.name} has died from thirst`)
      } else {
        console.log(`The ${this.name} is drinking`)
        this.thirst += Math.floor(Math.random() * 12) - 5
        this.energy += Math.floor(Math.random() * 11) - 5
        this.thirst = this.constrainValue(this.thirst, 0, 100)
        this.energy = this.constrainValue(this.energy, 0, 100)
      }
    }
  }

  sleep() {
    if (this.alive) {
      console.log(`The ${this.name} is sleeping`)
      this.energy += Math.floor(Math.random() * 15) - 5
      this.energy = this.constrainValue(this.energy, 0, 100)
    }
  }

  roam() {
    if (this.alive) {
      console.log(`The ${this.name} is roaming the lands`)
      this.energy -= 2
      this.thirst -= 2
      this.hunger -= 2
      this.energy = this.constrainValue(this.energy, 0, 100)
      this.thirst = this.constrainValue(this.thirst, 0, 100)
      this.hunger = this.constrainValue(this.hunger, 0, 100)
    }
  }

  constrainValue(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }
}

module.exports = Animal
