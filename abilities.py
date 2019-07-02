# -*- coding: utf-8 -*-
"""
Created on Mon Jul  1 22:34:27 2019

@author: rwszy
"""

class Abilities:
    
    def __init__(self, name, abilityType, accuracy=0.9, damage=None, critChance=None):
        self.name = name
        self.type = abilityType
        self.accuracy = accuracy
        self.damage = damage
        self.critChance = critChance

class DmgAbilities: 
        
tackle = Abilities("tackle", "normal", 5, 0.1)
growl = Abilities("growl", "normal")
submission = Abilities("submission", "fighting", 0.9, 5, 0.1)
focusEnergy = Abilities("focus energy", "fighting")
