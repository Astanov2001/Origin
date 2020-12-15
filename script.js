
let monster1 = {
    name: "Ali", 
    age: 19,
    damage: Math.floor(Math.random()* 15),
    win: false
};

let monster2 = {
    name: 'Oleg',
    age: 19,
    damage: Math.floor(Math.random()* 15),
    win: false
}

console.log("Урон Али = " + monster1.damage);
console.log("Урон Олега = " + monster2.damage);

let winner;

if (monster1.damage > monster2.damage) {
    console.log ("Ali Winner")
    winner = monster1.damage
    monster1.win = true
    console.log("Победитель Али Урон: " + winner);
} else if (monster1.damage < monster2.damage) {
    console.log ("Oleg Winner")
    winner = monster2.damage
    monster2.win = true
    console.log("Победитель Олег Урон: " + winner);
} else if (monster1.damage == monster2.damage) {
    console.log ("Ничья")
}

let monster3 = {
    name: "Boss",
    age: 100,
    damage: Math.floor(Math.random()* 20)
}

console.log ("Урон Босса " + monster3.damage)

if (monster3.damage > winner) {
    console.log("Босс Winner")
}else if (monster3.damage < winner){
    console.log("Босс Lose")
}else if (monster3.damage == winner) {
    console.log ("Ничья")
}
