// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! loaded gunscripts)')

ServerEvents.recipes(event => {
	
	event.remove({ output: 'anim_guns:enriched_iron' }) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
	event.remove({ output: 'anim_guns:hardened_iron_ingot' }) 
	event.remove({ output: 'anim_guns:hardened_iron_nugget' });
	event.remove({ output: 'anim_guns:enriched_iron_nugget' });
	  
	event.replaceInput({}, 'anim_guns:hardened_iron_ingot', 'techreborn:steel_ingot');

	event.remove({ output: 'anim_guns:standard_handgun_cartridge' });
	event.remove({ output: 'anim_guns:heavy_handgun_cartridge' });
	event.remove({ output: 'anim_guns:standard_rifle_cartridge' });
	event.remove({ output: 'anim_guns:heavy_rifle_cartridge' });
	event.remove({ output: 'anim_guns:shotgun_shell' });
	
	
	
event.shaped(
  Item.of('anim_guns:standard_handgun_cartridge', 8), // arg 1: output
  [ 
    'A', 
    'B ', // arg 2: the shape (array of strings)
    'C'  
  ],
  {
    A: 'techreborn:lead_nugget', 
    B: 'minecraft:gunpowder',  //arg 3: the mapping object
    C: 'minecraft:lead_ingot'   
  }
)


})