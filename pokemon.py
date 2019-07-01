# -*- coding: utf-8 -*-
"""
Created on Sun Jun 23 20:48:23 2019

@author: rwszy
"""

import random

pokemon = {
    1:"Farfetch'd", 2:"Onix", 3:"Hitmonlee", 4:"Hitmonchan", 5:"Lickitung", 
    6:"Chansey", 7:"Tangela", 8:"Kangaskhan", 9:"Mr. Mime", 10: "Scyther", 
    11: "Jynx", 12: "Electabuzz", 13: "Magmar", 14: "Pinsir", 15: "Tauros",
    16: "Lapras", 17: "Porygon", 18: "Aerodactyl", 19: "Snorlax"
    }

def get_starter():
    randKey = random.randint(1,19)
    return pokemon[randKey]

class Pokemon:
    
    def __init__(
        self, name, pkmnType, 
        health, attack, defense, speed, 
        ability1, ability2
        ):
        
        self.name = name
        self.type = pkmnType
        self.health = health
        self.attack = attack
        self.defense = defense
        self.speed = speed
        self.ability1 = ability1
        self.ability2 = ability2        
    
class Trainer:    
    def __init__(self, name, gender, money, pokemon):
        self.name = name
        self.gender = gender
        self.money = money
        self.pokemon = pokemon

class Abilities:
    def __init__(self, name, abilType, accuracy, damage, critChance):
        self.name = name
        self.type = abilType
        self.accuracy = accuracy
        self.damage = damage
        self.critChance = critChance 
        
        
        
trainer1 = Trainer(
    'Zack Rodgers', 
    'boy', 
    100, 
    get_starter()
    )

rival = Trainer(
    'Chris Nevile',
    'boy',
    100, 
    get_starter()
    )