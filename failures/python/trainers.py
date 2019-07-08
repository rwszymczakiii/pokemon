# -*- coding: utf-8 -*-
"""
Created on Mon Jul  1 21:55:19 2019

@author: rwszy
"""

from random import randint
import pokemon as pkmn

class Trainer:    
    
    starting_money = 100
 
    def get_starter(self):
        rand_key = randint(1,19)
        starter = pkmn.pokemon[rand_key]
        return starter
            
    def __init__(self, name):
        self.name = name
        self.money = self.starting_money
        self.pokemon = self.get_starter()
        
    def loseBattle(self):
        self.money *= 0.5
        
    def winBattle(self):
        self.money *= 1.125
            
trainer1 = Trainer('Zack Rodgers')
trainer2 = Trainer('Chris Nevile')