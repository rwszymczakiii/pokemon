# -*- coding: utf-8 -*-
"""
Created on Sun Jun 23 20:48:23 2019

@author: rwszy
"""

import random

gen1_pokemon = {
    1:'bulbasaur', 2:'ivysaur', 3:'venusaur',
    4:'charmander', 5:'charmeleon', 6:'charizard',
    7:'squirtle', 8:'wartortle', 9:'blastoise'                       
    }

def get_starter():
    randKey = random.randint(1,9)
    return gen1_pokemon[randKey]
    

class Pokemon:
    
    def __init__(
        self, name, type1, type2, 
        health, attack, defense, speed, 
        ability1, ability2
        ):
        
        self.name = name
        self.type1 = type1
        self.type2 = type2
        self.health = health
        self.attack = attack
        self.defense = defense
        self.speed = speed
        self.ability1 = ability1
        self.ability2 = ability2        
    
    def type1(self):
        pass
    
class Trainer:    
    def __init__(self, name, gender, money, pokemon):
        self.name = name
        self.gender = gender
        self.money = money
        self.pokemon = pokemon
        
trainer1 = Trainer(
    'Zack Rodgers', 
    'boy', 
    random.randint(1,1000), 
    get_starter()
    )

rival = Trainer(
    'Chris Nevile',
    'boy',
    random.randint(1,1000), 
    get_starter()
    )