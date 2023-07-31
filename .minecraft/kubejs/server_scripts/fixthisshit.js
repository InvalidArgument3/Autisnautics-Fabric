// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
	
	  event.remove({id: 'magistuarmory:furnace/steel_ingot_blasting'}) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json


})