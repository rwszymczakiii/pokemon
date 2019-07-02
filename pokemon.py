# -*- coding: utf-8 -*-
"""
Created on Sun Jun 23 20:48:23 2019

@author: rwszy
"""

import abilities as abl

class Pokemon:
    
    def __init__(self, name, type1, type2=None):
        
        self.name = name
        self.type1 = type1
        self.type2 = type2      
        self.health = 10
        self.attack = 10
        self.defense = 10
        self.speed = 10       
        self.ability1 = None
        self.ability2 = None
        
        if self.type1 == "normal":
            self.health += 2
            self.attack -= 2
            self.ability1 = "tackle"
        if self.type2 == "normal":
            self.health += 1
            self.attack -= 1
            self.ability2 = "growl"
            
        if self.type1 == "water":
            self.health += 2
            self.attack -= 2
            self.ability1 = "bubble"           
        if self.type2 == "water":
            self.health += 1
            self.attack -= 1
            self.ability2 = "withdraw"

        if self.type1 == "fighting":
            self.attack += 2
            self.defense -= 2
            self.ability1 = "submission"           
        if self.type2 == "fighting":
            self.attack += 1
            self.defense -= 1
            self.ability2 = "focus energy"            

        if self.type1 == "psychic":
            self.attack += 2
            self.defense -= 2
            self.ability1 = "confusion"
        if self.type2 == "psychic":
            self.attack += 1
            self.defense -= 1
            self.ability2 = "barrier"

        if self.type1 == "fire":
            self.attack += 2
            self.defense -= 2
            self.ability1 = "ember"
        if self.type2 == "fire":
            self.attack += 1
            self.defense -= 1
            self.ability2 = "leer"
            
        if self.type1 == "rock":
            self.defense += 2
            self.speed -= 2
            self.ability1 = "rock throw"
        if self.type2 == "rock":
            self.defense += 1
            self.speed -= 1
            self.ability2 = "defense curl"

        if self.type1 == "grass":
            self.defense += 2
            self.speed -= 2
            self.ability1 = "absorb"
        if self.type2 == "grass":
            self.defense += 1
            self.speed -= 1
            self.ability2 = "growth"            

        if self.type1 == "ice":
            self.defense += 2
            self.speed -= 2
            self.ability1 = "aurora beam"
        if self.type2 == "ice":
            self.defense += 1
            self.speed -= 1
            self.ability2 = "harden"

        if self.type1 == "ground":
            self.defense += 2
            self.speed -= 2
            self.ability1 = "dig"
        if self.type2 == "ground":
            self.defense += 1
            self.speed -= 1
            self.ability2 = "defense curl"

        if self.type1 == "electric":
            self.speed += 2
            self.health -= 2
            self.ability1 = "thunder shock"
        if self.type2 == "electric":
            self.speed += 1
            self.health -= 1
            self.ability2 = "agility"             

        if self.type1 == "bug":
            self.speed += 2
            self.health -= 2
            self.ability1 = "leech life"
        if self.type2 == "bug":
            self.speed += 1
            self.health -= 1
            self.ability2 = "harden"
            
        if self.type1 == "flying":
            self.speed += 2
            self.health -= 2
            self.ability1 = "peck"
        if self.type2 == "flying":
            self.speed += 1
            self.health -= 1
            self.ability2 = "sharpen"
            
        if self.type2 == None:
            self.ability2 = "growl"
        
farfetchd = Pokemon("Farfetch'd", "normal", "flying")
onix = Pokemon("Onix", "rock", "ground")
hitmonlee = Pokemon("Hitmonlee", "fighting")
hitmonchan = Pokemon("Hitmonchan", "fighting")
lickitung = Pokemon("Lickitung", "normal")
chansey = Pokemon("Chansey", "normal")
tangela = Pokemon("Tangela", "grass")
kangaskhan = Pokemon("Kangaskhan", "normal")
mrMime = Pokemon("Mr. Mime", "psychic")
scyther = Pokemon("Scyther", "bug", "flying")
jynx = Pokemon("Jynx", "ice", "psychic")
electabuzz = Pokemon("Electabuzz", "electric")
magmar = Pokemon("Magmar", "fire")
pinsir = Pokemon("Pinsir", "bug")
tauros = Pokemon("Tauros", "normal")
lapras = Pokemon("Lapras", "water", "ice")
porygon = Pokemon("Porygon", "normal")
aerodactyl = Pokemon("Aerodactyl", "rock", "flying")
snorlax = Pokemon("Snorlax", "normal")

pokemon = {
    1:farfetchd, 2:onix, 3:hitmonlee, 4:hitmonchan, 5:lickitung, 
    6:chansey, 7:tangela, 8:kangaskhan, 9:mrMime, 10: scyther, 
    11: jynx, 12: electabuzz, 13: magmar, 14: pinsir, 15: tauros,
    16: lapras, 17: porygon, 18: aerodactyl, 19: snorlax
    }

