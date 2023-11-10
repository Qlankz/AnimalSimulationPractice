class Animal {
  constructor(name, hunger, thirst, energy, age, alive) {
    this.name = name
    this.hunger = this.constrainValue(hunger, 0, 100)
    this.thirst = this.constrainValue(thirst, 0, 100)
    this.energy = this.constrainValue(energy, 0, 100)
    this.age = age
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

    let name = animalNames[Math.floor(Math.random() * animalNames.length)]
    let hunger = Math.floor(Math.random() * 100)
    let thirst = Math.floor(Math.random() * 100)
    let energy = Math.floor(Math.random() * 100)
    let age = 0

    console.log(`A new ${name} was born onto the lands`)
    return new Animal(name, hunger, thirst, energy, age, true)
  }

  constrainValue(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }
}

module.exports = Animal
