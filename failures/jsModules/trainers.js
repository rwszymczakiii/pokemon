import Pokemon from "./pokemon.js";

class Trainer {
    constructor(name) {
        this.name = name;

        let startingMoney = 100;
        this.money = startingMoney;

        let getStarter = function() {
            let rand_key = Math.floor(Math.random() * 19) + 1;
            let starter = pokemon[rand_key];
            return starter;
        };
        this.starter = getStarter();
    }
/*    let loseBattle = function() {
        this.money *= 0.5;
    };

    let winBattle = function() {
        this.money *= 1.125;
    }; */   
}

trainer1 = new Trainer("robbie");
console.log(trainer1);