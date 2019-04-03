
module.exports = function show_hp_etchings(d)
{	
	d.hook('S_SHOW_ITEM_TOOLTIP', 10, (event) => {       
		switch (event.etching1)
		{
			case 4010279: // Gloves Energetic IV
			case 4010271: // Weapon Energetic IV
			case 4010272: // Boots Grounded IV
			case 4010264: // Armor Grounded IV
			case 4010299: // Jewelry Keen IV
				event.etching1 = 4010242; // Laceration IV
				return true;
			case 4010293: // Keen III
				event.etching1 = 4010096; // Laceration III
				return true;
			case 4010287: // Keen II
				event.etching1 = 527000; // Concentration II
				return true;
		}
	});
}
