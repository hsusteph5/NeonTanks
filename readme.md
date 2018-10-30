# NeonTanks

## Background and Overview

NeonTanks is a projectile based game, inspired by GunBound and ShellShock Live. The goal is to play against an AI tank and fire neon projectiles to win!


## Functionality and MVP Features
* [ ] Users will be able to move their tank and shoot projectile (Physics calculated to create a projectile arc)
* [ ] Projectiles will deal damage to enemies
* [ ] Enemies will have hit boxes and damage taken will be recorded
* [ ] Score will be displayed at the end of the level
* [ ] Collisions will be circle spirals and and death animation will also be in place
* [ ] Background music, tank movement music, collision music, and explosion music

### Bonus 
* [ ] AI will be able to fire back more accurately with increasing difficultly of levels
* [ ] Randomly spawned bonuses that will increase the damage and look of the projectiles 
* [ ] Users can choose their own tanks that shoot different geometric projectiles

![StartUp Page](images/startuppageneon.png)
![Preview Page](images/neontankspreview.png)

## Architecture and Technologies
  * Javascript for the game logic 
  * HTML5 Canvas for render
  * Web Audio API for music and collision sounds 
  * Webpack for importing and exporting between files

## Implementation Timeline
  * Day 1: Learn the basic physics necessary for tank movement and create canvas background and assets
  * Day 2: Create the shooting mechanics / physics for the tanks 
  * Day 3: Handling the enemy hitboxes and collisions
  * Day 4: Change the background based on how collisions occur
  * Day 5: Adding sound to the tank movement, explosions, and 
  * Day 6: Creating a game menu for start, pause, and score 