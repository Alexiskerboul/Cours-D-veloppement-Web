const name = "Alexis";
var age = 20;
const color = ["red", "orange", "yellow"];

const cat = {
    height: 30,
    color: "black",
    age: 10
}

function calculerAire(longueur, largeur) {
    return longueur*largeur
}

function eurotodollar(euro) {
    return euro*1.09
}

function carre(nb) {
    return nb**2
}

console.log(
    `Cat: ${cat.age} years old, color ${cat.color}, height ${cat.height} cm`
)

const dollar = eurotodollar(10)
console.log(dollar)

const car = carre(3)
console.log(car)

for (let i = 1; i<11; i+=1) {
    console.log(i)
}

function parite(nb) {
    if (nb%2 == 0) {
        return true
    }
    else {
        return false
    }
}

