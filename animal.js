class Animal {
  constructor(name, hunger, thirst, energy, age, alive) {
    this.name = name
    this.hunger = this.constrainValue(hunger, 0, 100)
    this.thirst = this.constrainValue(thirst, 0, 100)
    this.energy = this.constrainValue(energy, 0, 100)
    this.age = age
    this.alive = alive
  }

  constrainValue(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }
}

class Wolf extends Animal {
  constructor(name, speed, hunger, thirst, energy, age, alive) {
    super(name, hunger, thirst, energy, age, alive)
    this.speed = speed
  }
}

class Bunny extends Animal {
  constructor(name, speed, hunger, thirst, energy, age, alive) {
    super(name, hunger, thirst, energy, age, alive)
    this.speed = speed
  }
}

class Deer extends Animal {
  constructor(name, speed, hunger, thirst, energy, age, alive) {
    super(name, hunger, thirst, energy, age, alive)
    this.speed = speed
  }
}

module.exports = { Animal, Wolf, Bunny, Deer }
