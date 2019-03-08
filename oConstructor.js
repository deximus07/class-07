//empty array
let heroes = []

//creating a constructor
let Hero = function(name, minPower, maxPower, powerPerBattle) {
    this.name = name
    this.minPower = minPower
    this.maxPower = maxPower
    this.powerPerBattle = powerPerBattle
}

Hero.prototype.powerPerHour = function(){
    let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.powerPerBattle
}

//adding objects to constructor
let ironMan = new Hero('Iron Man', 50, 200, 145)
let thor = new Hero('Thor', 200, 5000, 3600)
let hulk = new Hero('Hulk', 900, 7000, 4500)
let hawkEye = new Hero('Hawkeye', 20, 100, 65)
heroes.push(ironMan, thor, hulk, hawkEye)
console.log(heroes)
