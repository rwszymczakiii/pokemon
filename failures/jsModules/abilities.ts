class DamageAbility {
    name: string;
    type: string;
    damage: number;
    accuracy: number;
    critChance: number;
    constructor({ name, type, damage, accuracy, critChance }: { name: string; type: string; damage: number | undefined; accuracy: number | undefined; critChance: number | undefined; }) {
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
const tackle = new DamageAbility({ name: "tackle", type: "normal", damage: 5, accuracy: 0.95, critChance: 0.05 });
const bubble = new DamageAbility({ name: "bubble", type: "water", damage: 5, accuracy: 0.95, critChance: 0.05 });
const submission = new DamageAbility({ name: "submission", type: "fighting", damage: 5, accuracy: 0.95, critChance: 0.05 });
const confusion = new DamageAbility({ name: "confusion", type: "psychic", damage: 5, accuracy: 0.95, critChance: 0.05 });
const ember = new DamageAbility({ name: "ember", type: "fire", damage: 5, accuracy: 0.95, critChance: 0.05 });
const rockThrow = new DamageAbility({ name: "rock throw", type: "rock", damage: 5, accuracy: 0.95, critChance: 0.05 });
const absorb = new DamageAbility({ name: "absorb", type: "grass", damage: 5, accuracy: 0.95, critChance: 0.05 })
const auroraBeam = new DamageAbility({ name: "aurora beam", type: "water", damage: 5, accuracy: 0.95, critChance: 0.05 });
const dig = new DamageAbility({ name: "dig", type: "ground", damage: 5, accuracy: 0.95, critChance: 0.05 });
const thunderShock = new DamageAbility({ name: "thunder shock", type: "electric", damage: 5, accuracy: 0.95, critChance: 0.05 });
const scratch = new DamageAbility({ name: "scratch", type: "normal", damage: 5, accuracy: 0.95, critChance: 0.05 });
const peck = new DamageAbility({ name: "peck", type: "flying", damage: 5, accuracy: 0.95, critChance: 0.05 });

class EffectAbility {
    name: string;
    type: string;
    effect: string;
    accuracy: number;
    constructor({ name, type, effect, accuracy }: { name: string; type: string; effect: string; accuracy: number | undefined; }) {
        this.name = name;
        this.type = type;
        this.effect = effect;

        if (accuracy === undefined) {
            accuracy = 0.95;
        }
        this.accuracy = accuracy;
    }
}
const growl = new EffectAbility({ name: "growl", type: "normal", effect: "lower attack", accuracy: 0.95});
const withdraw = new EffectAbility({ name: "withdraw", type: "water", effect: "raise defense", accuracy: 0.95 });
const focusEnergy = new EffectAbility({ name: "focus energy", type: "fighting", effect: "raise critChance", accuracy: 0.95 });
const barrier = new EffectAbility({ name: "barrier", type: "psychic", effect: "raise defense", accuracy: 0.95 });
const leer = new EffectAbility({ name: "leer", type: "normal", effect: "lower defense", accuracy: 0.95 });
const defenseCurl = new EffectAbility({ name: "defense curl", type: "normal", effect: "raise defense", accuracy: 0.95 });
const growth = new EffectAbility({ name: "growth", type: "grass", effect: "raise attack", accuracy: 0.95 });
const harden = new EffectAbility({ name: "harden", type: "normal", effect: "raise defense", accuracy: 0.95 });
const agility = new EffectAbility({ name: "agility", type: "psychic", effect: "raise speed", accuracy: 0.95 });
const sharpen = new EffectAbility({ name: "scratch", type: "normal", effect: "raise attack", accuracy: 0.95 });

export { 
    DamageAbility, EffectAbility, tackle, bubble, submission, confusion, ember, rockThrow, absorb, auroraBeam, dig, 
    thunderShock, scratch, growl, withdraw, focusEnergy, barrier, leer, defenseCurl, growth, harden, agility, sharpen 
};


