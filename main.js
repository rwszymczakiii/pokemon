class DamageAbility {
    constructor(name, type, damage, accuracy, critChance) {
        this.name = name;
        this.type = type;

        if (damage === undefined) {
            damage = 0;
        }
        this.damage = damage;

        if (accuracy === undefined) {
            accuracy = 0.95;
        }
        this.accuracy = accuracy;

        if (critChance === undefined) {
            critChance = 0.05;
        }
        this.critChance = critChance;   
    }
}

const tackle = new DamageAbility("tackle", "normal", 5);
const bubble = new DamageAbility("bubble", "water", 5);
const submission = new DamageAbility("submission", "fighting", 5);
const confusion = new DamageAbility("confusion", "psychic", 5);
const ember = new DamageAbility("ember", "fire", 5);
const rockThrow = new DamageAbility("rock throw", "rock", 5);
const absorb = new DamageAbility("absorb", "grass", 5);
const auroraBeam = new DamageAbility("aurora beam", "water", 5);
const dig = new DamageAbility("dig", "ground", 5);
const thunderShock = new DamageAbility("thunder shock", "electric", 5);
const scratch = new DamageAbility("scratch", "normal", 5);
const peck = new DamageAbility("peck", "flying", 5);

class EffectAbility {
    constructor(name, type, effect, accuracy) {
        this.name = name;
        this.type = type;
        this.effect = effect;

        if (accuracy === undefined) {
            accuracy = 0.95;
        }
        this.accuracy = accuracy;
    }
}

const growl = new EffectAbility("growl", "normal", "lower attack");
const withdraw = new EffectAbility("withdraw", "water", "raise defense");
const focusEnergy = new EffectAbility("focus energy", "fighting", "raise critChance");
const barrier = new EffectAbility("barrier", "psychic", "raise defense");
const leer = new EffectAbility("leer", "normal", "lower defense");
const defenseCurl = new EffectAbility("defense curl", "normal", "raise defense");
const growth = new EffectAbility("growth", "grass", "raise attack");
const harden = new EffectAbility("harden", "normal", "raise defense");
const agility = new EffectAbility("agility", "psychic", "raise speed");
const sharpen = new EffectAbility("scratch", "normal", "raise attack");


class Pokemon {
    constructor(name, type1, type2) { // can I overload functions is javascript?
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.health = 10;
        this.attack = 10;
        this.defense = 10;
        this.speed = 10;
        this.ability1 = undefined;
        this.ability2 = undefined;
        
        switch (this.type1) {
            case "normal":
                this.health += 2;
                this.attack -= 2;
                this.ability1 = tackle;
                break;
            case "water":
                this.health += 2;
                this.attack -= 2;
                this.ability1 = bubble;
                break;
            case "fighting":
                this.attack += 2;
                this.defense -= 2;
                this.ability1 = submission;
                break;
            case "psychic":
                this.attack += 2;
                this.defense -= 2;
                this.ability1 = confusion;
                break;
            case "fire":
                this.attack += 2;
                this.defense -= 2;
                this.ability1 = ember;
                break;
            case "rock":
                this.defense += 2;
                this.speed -= 2;
                this.ability1 = rockThrow;
                break;
            case "grass":
                this.defense += 2;
                this.speed -= 2;
                this.ability1 = absorb;
                break;
            case "ice":
                this.defense += 2;
                this.speed -= 2;
                this.ability1 = auroraBeam;
                break;
            case "ground":
                this.attack += 2;
                this.defense -= 2;
                this.ability1 = dig;
                break;
            case "electric":
                this.speed += 2;
                this.health -= 2;
                this.ability1 = thunderShock;
                break;
            case "bug":
                this.speed += 2;
                this.health -= 2;
                this.ability1 = scratch;
                break;
            case "flying":
                this.speed += 2;
                this.health -= 2;
                this.ability1 = absorb;
                break;
            case "ice":
                this.defense += 2;
                this.speed -= 2;
                this.ability1 = auroraBeam;
        }

        switch (this.type2) {
            case undefined:
                this.ability2 = growl;
                this.type2 = "None";
                break;
            case "normal":
                this.health ++;
                this.attack --;
                this.ability2 = growl;
                break;
            case "water":
                this.health ++;
                this.attack --;
                this.ability2 = withdraw;
                break;
            case "fighting":
                this.attack ++;
                this.defense --;
                this.ability2 = focusEnergy;
                break;
            case "psychic":
                this.attack ++;
                this.defense --;
                this.ability2 = barrier;
                break;
            case "fire":
                this.attack ++;
                this.defense --;
                this.ability2 = leer;
                break;
            case "rock":
                this.defense ++;
                this.speed --;
                this.ability2 = defenseCurl;
                break;
            case "grass":
                this.defense ++;
                this.speed --;
                this.ability2 = growth;
                break;
            case "ice":
                this.defense ++;
                this.speed --;
                this.ability2 = harden;
                break;
            case "ground":
                this.attack ++;
                this.defense --;
                this.ability2 = defenseCurl;
                break;
            case "electric":
                this.speed ++;
                this.health --;
                this.ability2 = agility;
                break;
            case "bug":
                this.speed ++;
                this.health --;
                this.ability2 = harden;
                break;
            case "flying":
                this.speed ++;
                this.health --;
                this.ability2 = sharpen;
                break;
        }
    }
}

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

const farfetchd = new Pokemon("Farfetch'd", "normal", "flying");
const onix = new Pokemon("Onix", "rock", "ground");
const hitmonlee = new Pokemon("Hitmonlee", "fighting");
const hitmonchan = new Pokemon("Hitmonchan", "fighting");
const lickitung = new Pokemon("Lickitung", "normal");
const chansey = new Pokemon("Chansey", "normal");
const tangela = new Pokemon("Tangela", "grass");
const kangaskhan = new Pokemon("Kangaskhan", "normal");
const mrMime = new Pokemon("Mr. Mime", "psychic");
const scyther = new Pokemon("Scyther", "bug", "flying");
const jynx = new Pokemon("Jynx", "ice", "psychic");
const electabuzz = new Pokemon("Electabuzz", "electric");
const magmar = new Pokemon("Magmar", "fire");
const pinsir = new Pokemon("Pinsir", "bug");
const tauros = new Pokemon("Tauros", "normal");
const lapras = new Pokemon("Lapras", "water", "ice");
const porygon = new Pokemon("Porygon", "normal");
const aerodactyl = new Pokemon("Aerodactyl", "rock", "flying");
const snorlax = new Pokemon("Snorlax", "normal");

const pokemon = {
    1: farfetchd , 2: onix, 3: hitmonlee, 4: hitmonchan, 5: lickitung, 
    6: chansey, 7: tangela, 8: kangaskhan, 9: mrMime, 10: scyther, 
    11: jynx, 12: electabuzz, 13: magmar, 14: pinsir, 15: tauros,
    16: lapras, 17: porygon, 18: aerodactyl, 19: snorlax
};

// ---- html ----

const init = function(){
    document.getElementById("submit-your-name").addEventListener("click", createTrainer);
};

const createTrainer = function(ev){
    ev.preventDefault();
    trainer1 = document.getElementById("input-your-name").value;
    document.getElementById("div-input-your-name").remove();
    trainer1 = new Trainer(trainer1);
    console.log(trainer1.starter);

};

document.addEventListener("DOMContentLoaded", init);