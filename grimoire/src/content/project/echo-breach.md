---
title: 'Echo Breach'
description: 'A Desperate Fight for Survival in the Depths of Space.'
updatedDate: 'March 15 2026'
startDate: 'September 1 2024'
pubDate: 'December 13, 2024'
currentStatus: 'Prototype'
teamSize: '5'
company: 'Singularity Studios'
role: 'System & UI Programmer'
heroImage: '../../assets/EchoBreach.png'
skills: ["Unity", "C#", "Unity Shaderlab"]
links: [{name: "Play the Game", url: "https://wct9667.itch.io/echo-breach"}]
---
## Overview
Echo Breach is a 3d horror game in Unity. 
2 players find themselves on a spaceship, destined to crash into the planet below. 
They must work together to escape and survive.
Each character has a different set of abilities; brain vs brawn.
The brain gets a flashlight, and can unlock doors. 
The brawn can smash things and push heavy objects.

##  Gameplay Programming
I created many of the core systems within the game.

### The Flashlight
The flashlight was an important piece of the gameplay. 
The brain uses it to illuminate the world, revealing hidden secrets. 
It has a limited battery, yet recharges over time when not in use.

### Transparency System for walls.
By far the most complex system I implemented.
Players had a locked perspective, so getting in spots that were hard to see was a commonality.
I created a system that raycasts from the camera, dynamically increasing alpha on objects blocking the player from the camera.
This material could be used on any object, so certain objects could stay solid.

### Interaction System.
The interaction system in the game was also important.
Players needed to be able to interact with objects in their world, such as items, doors, or boxes
I created an abstract interaction system where interactable objects would derive from a base class.
Objects closest to the player could be interacted with, and do custom interactions depending on the context.
Interactions could also be locked, and would not show if a certain player could not interact.

### Doors and locks.
An extension of the interaction system, I created doors that could lock or unlock with a provided context.
These were important to push the player in a certain direction, blocking them from further access to the map until conditions were completed.


## UI Programming
I programmed UI relevant to the systems I created, as well as some of the main menu and diegetic UI.

### Flashlight UI & Interaction Prompts
The flashlight UI in the game had to show the charge of the flashlight as it changed based on use.
The trickier UI to implement was the interaction prompts, as they had to show near objects that could be interacted with.
The solution was to make them world-space UI and billboard them to the main camera. 
To make the UI render over other objects, it was rendered to a separate UI camera, allowing the prompts to not get blocked by other elements of the world.

### Diegetic Screens (Timer and Planet)
I created the diegetic screens of the planet and countdown timer within the ship.
These gave the player's information regarding their fate.
Rather than make these separate from the world, it was fitting to make them a part of the space-ship.
This UI required render-textures, and additional cameras that would render to those textures. 
This effect created screens which could be placed around the ship to show specific UI.

### Main Menu: Planet Scaling, Light, Volume Slider
## Tech Art
###Lighting.
Post Processesing.
Shaders: Static for television screens and transparency.




