class Animal {
  constructor(name, hunger, thirst, energy, alive) {
    this.name = name
    this.hunger = hunger
    this.thirst = thirst
    this.energy = energy
    this.alive = alive
  }

  static newAnimal(name, hunger, thirst, alive) {
    console.log('A new animal was born')
    return new Animal(name, hunger, thirst, alive)
  }

  eat() {
    if (this.hunger >= 100) {
      this.hunger = 100
    } else if (this.hunger <= 0) {
      this.hunger = 0
      this.alive = false
      console.log(`A ${this.name} has died from hunger`)
    } else {
      console.log(`The ${this.name} is eating`)
      this.hunger += 15
      this.energy += 10
    }
  }

  drink() {
    if (this.thirst >= 100) {
      this.thirst = 100
    } else if (this.thirst <= 0) {
      this.thirst = 0
      this.alive = false
      console.log(`A ${this.name} has died from thirst`)
    } else {
      console.log(`The ${this.name} is drinking`)
      this.thirst += 25
      this.energy += 5
    }
  }

  sleep() {
    if (this.energy >= 100) {
      this.energy = 100
    } else if (this.energy <= 0) {
      this.energy = 10
      console.log(`The ${this.name} has passed out from exhaustion`)
    } else {
      this.energy += 30
    }
  }
}
