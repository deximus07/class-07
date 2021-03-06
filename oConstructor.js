//empty array
let heroes = []
let hours = ['6am', '7am', '9am', '10am', '11am', '12pm']

//creating a constructor
let Hero = function(name, minPower, maxPower, powerPerBattle) {
    this.name = name
    this.minPower = minPower
    this.maxPower = maxPower
    this.powerPerBattle = powerPerBattle
}

//making a prototype
Hero.prototype.powerPerHour = function(){
    let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.powerPerBattle
}

//adding objects to constructor
let ironMan = new Hero('Iron Man', 50, 200, 145)
let thor = new Hero('Thor', 200, 5000, 3600)
let hulk = new Hero('Hulk', 900, 7000, 4500)
let hawkEye = new Hero('Hawkeye', 20, 100, 65)
let spiderMan = new Hero('Spider Man', 100, 2500, 1200)
let capAmerica = new Hero('Captain America', 200, 2000, 1100)
let blackWidow = new Hero('Black Widow', 10, 90, 65)

//pushing new instances to the constructor
heroes.push(ironMan, thor, hulk, hawkEye, spiderMan, capAmerica, blackWidow)
console.log(heroes)

//creating a table via js
let tbl = document.createElement('table')
let tblRow = document.createElement('tr')
let tblHeader = document.createElement('tr')
let docBody = document.getElementById('docbody')
let tblHeaderCell = document.createElement('th')
docBody.appendChild(tbl)
tbl.appendChild(tblHeader)


for (let i = 0; i < hours.length; i++){
    let tblHeaderCell = document.createElement('th')
    tblHeader.appendChild('tblHeaderCell')
    tblHeaderCell.innerText = hours[i].powerPerHour()
}