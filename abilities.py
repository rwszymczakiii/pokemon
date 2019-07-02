# -*- coding: utf-8 -*-
"""
Created on Mon Jul  1 22:34:27 2019

@author: rwszy
"""
import pokemon as pkmn



class Ability:
    def __init__(
        self, name, abilityType, accuracy=1, 
        effect=None, damage=None, critChance=0
        ):
        self.name = name
        self.type = abilityType
        self.accuracy = accuracy
        self.effect = effect
        self.damage = damage
        self.critChance = critChance
        
    def affect_stats(target, stat, effect=):
        if target == other and  
            pkmn.Pokemon.stat effect

tackle = Ability("tackle", "normal", damage=5 )
submission = Ability("submission", "fighting", effect=damage=5)
growl = Ability("growl", "normal")
focusEnergy = Ability("focus energy", "fighting")
