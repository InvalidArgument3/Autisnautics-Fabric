// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! loaded gunscripts)')

ServerEvents.recipes(event => {
	
	event.remove({ output: 'anim_guns:enriched_iron' }) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
	event.remove({ output: 'anim_guns:hardened_iron_ingot' }) 
	event.remove({ output: 'anim_guns:hardened_iron_nugget' });
	event.remove({ output: 'anim_guns:enriched_iron_nugget' });
	  
	event.replaceInput({}, 'anim_guns:hardened_iron_ingot', 'techreborn:steel_ingot');

	event.replaceInput({ mod: 'anim_guns', output: /.*Cartridge.*/ }, 'minecraft:iron_ingot', 'techreborn:lead_ingot');
	



})