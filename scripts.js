const range = n => [...Array(n)].map((_, i) => i)

const appearances = [
    ["Has a distinctive necklace on", "Has a distinctive ciriclet on", "Has a distinctive bracelet on"],
    "Has a piercing", // Bodyparts,
    ["Is wearing flamboyant clothes", "Is wearing outlandish clothes"],
    "Is wearing formal, clean clothes",
    "Is wearing ragged, dirty clothes",
    "Has a prounounced scar", // Bodyparts,
    "Is missing some teeth",
    `Is missing ${Math.floor(Math.random() * 11)} finger(s)`,
    ["Has an unusual eye color", "Has two different eye colors"], // Unusual colors,
    "Is tattooed", //Bodyparts,
    "Has a birthmark", //Bodyparts,
    "Has an unusual skin color", // Unusual colors,
    "Is bald",
    ['Has a braided beard', 'Has braided hair'],
    "Has an unusual hair color", // Unusual colors,
    "Has a nervous eye twitch" ,
    "Has a distinctive nose" ,
    ["Has crooked posture", "Has rigid posture"],
    "Is exceptionally beautiful",
    "Is exceptionally ugly"
]

const sexes = [
    "Female",
    "Male"
]

const races = [
    "Dwarf",
    "Elf",
    "Halfling",
    "Human",
    "Dragonborn",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Tiefling"
]

const names = {
	First: {
		Dwarf: {
			Female: [
				"Amber", 
				"Artin", 
				"Audhild", 
				"Bardryn", 
				"Dagnal", 
				"Diesa", 
				"Eldeth", 
				"Falkrunn", 
				"Finellen", 
				"Gunnloda", 
				"Gurdis", 
				"Helja", 
				"Hlin", 
				"Kathra", 
				"Kristryd", 
				"Ilde", 
				"Liftrasa", 
				"Mardred", 
				"Riswynn", 
				"Sannl", 
				"Torbera", 
				"Torgga", 
				"Vistra"
			],
			Male: [
				"Adrik", 
				"Alberich", 
				"Baern", 
				"Barendd", 
				"Brottor", 
				"Bruenor", 
				"Dain", 
				"Darrak", 
				"Delg", 
				"Eberk", 
				"Einkil", 
				"Fargrim", 
				"Flint", 
				"Gardain", 
				"Harbek", 
				"Kildrak", 
				"Morgran", 
				"Orsik", 
				"Oskar", 
				"Rangrim", 
				"Rurik", 
				"Taklinn", 
				"Thoradin", 
				"Thorin", 
				"Tordek", 
				"Traubon", 
				"Travok", 
				"Ulfgar", 
				"Veit", 
				"Vondal"
			]
		},
		Elf: {
			Female: [
				"Adrie",
				"Althaea", 
				"Anastrianna", 
				"Andraste", 
				"Antinua", 
				"Bethrynna", 
				"Birel", 
				"Caelynn", 
				"Drusilia", 
				"Enna", 
				"Felosial", 
				"Ielenia", 
				"Jelenneth", 
				"Keyleth", 
				"Leshanna", 
				"Lia", 
				"Meriele", 
				"Mialee", 
				"Naivara", 
				"Quelenna", 
				"Quillathe", 
				"Sariel", 
				"Shanairra", 
				"Shava", 
				"Silaqui", 
				"Theirastra", 
				"Thia", 
				"Vadania", 
				"Valanthe", 
				"Xanaphia"
			],
			Male: [
				"Adran", 
				"Aelar", 
				"Aramil", 
				"Arannis", 
				"Aust", 
				"Beiro", 
				"Berrian", 
				"Carric", 
				"Enialis", 
				"Erdan", 
				"Erevan", 
				"Galinndan", 
				"Hadarai", 
				"Heian", 
				"Himo", 
				"Immeral", 
				"Ivellios", 
				"Laucian", 
				"Mindartis", 
				"Paelias", 
				"Peren", 
				"Quarion", 
				"Riardon", 
				"Rolen", 
				"Soveliss", 
				"Thamior", 
				"Tharivol", 
				"Theren", 
				"Varis"
			]
		},
		Elfchild: [
			"Ara",
			"Bryn", 
			"Del", 
			"Eryn", 
			"Faen", 
			"Innil", 
			"Lael", 
			"Mella", 
			"Naill", 
			"Naeris", 
			"Phann", 
			"Rael", 
			"Rinn", 
			"Sai", 
			"Syllin", 
			"Thia", 
			"Vall"
		],
		Halfling: {
			Female: [
				"Andry", 
				"Bree", 
				"Callie", 
				"Cora", 
				"Euphemia", 
				"Jillian", 
				"Kithri", 
				"Lavinia", 
				"Lidda", 
				"Merla", 
				"Nedda", 
				"Paela", 
				"Portia", 
				"Seraphina", 
				"Shaena", 
				"Trym", 
				"Vani", 
				"Verna"
			],
			Male: [
				"Alton", 
				"Ander", 
				"Cade", 
				"Corrin", 
				"Eldon", 
				"Errich", 
				"Finnan", 
				"Garret", 
				"Lindal", 
				"Lyle", 
				"Merric", 
				"Milo", 
				"Osborn", 
				"Perrin", 
				"Reed", 
				"Roscoe", 
				"Wellby"
			]
		},
		Human: {
			Female: [
				"Atala", 
				"Ceidil", 
				"Hama", 
				"Jasmal", 
				"Meilil", 
				"Seipora", 
				"Yasheira", 
				"Zasheida",
				"Arveene", 
				"Esvele", 
				"Jhessail", 
				"Kerri", 
				"Lureene", 
				"Miri", 
				"Rowan", 
				"Shandri", 
				"Tessele",
				"Alethra", 
				"Kara", 
				"Katernin", 
				"Mara", 
				"Natali", 
				"Olma", 
				"Tana", 
				"Zora",
				"Amafrey", 
				"Betha", 
				"Cefrey", 
				"Kethra", 
				"Mara", 
				"Olga", 
				"Silifrey", 
				"Westra",
				"Arizima", 
				"Chathi", 
				"Nephis", 
				"Nulara", 
				"Murithi", 
				"Sefris", 
				"Thola", 
				"Umara", 
				"Zolis",
				"Fyevarra", 
				"Hulmarra", 
				"Immith", 
				"Imzel", 
				"Navarra", 
				"Shevarra", 
				"Tammith", 
				"Yuldra",
				"Bai", 
				"Chao", 
				"Jia", 
				"Lei", 
				"Mei", 
				"Qiao", 
				"Shui", 
				"Tai",
				"Balama", 
				"Dona", 
				"Faila", 
				"Jalana", 
				"Luisa", 
				"Marta", 
				"Quara", 
				"Selise", 
				"Vonda"
			],
			Male: [
				"Aseir", 
				"Bardeid", 
				"Haseid", 
				"Khemed", 
				"Mehmen", 
				"Sudeiman", 
				"Zasheir",
				"Darvin", 
				"Dorn", 
				"Evendur", 
				"Gorstag", 
				"Grim", 
				"Helm", 
				"Malark", 
				"Morn", 
				"Randal", 
				"Stedd",
				"Bor", 
				"Fodel", 
				"Glar", 
				"Grigor", 
				"Igan", 
				"Ivor", 
				"Kosef", 
				"Mival", 
				"Orel", 
				"Pavel", 
				"Sergor",
				"Ander", 
				"Blath", 
				"Bran", 
				"Frath", 
				"Geth", 
				"Lander", 
				"Luth", 
				"Malcer", 
				"Stor", 
				"Taman", 
				"Urth",
				"Aoth", 
				"Bareris", 
				"Ehput-Ki", 
				"Kethoth", 
				"Mumed", 
				"Ramas", 
				"So-Kehur", 
				"Thazar-De", 
				"Urhur",
				"Borivik", 
				"Faurgar", 
				"Jandar", 
				"Kanithar", 
				"Madislak", 
				"Ralmevik", 
				"Shaumar", 
				"Vladislak",
				"An", 
				"Chen", 
				"Chi", 
				"Fai", 
				"Jiang", 
				"Jun", 
				"Lian", 
				"Long", 
				"Meng", 
				"On", 
				"Shan", 
				"Shui", 
				"Wen",
				"Anton", 
				"Diero", 
				"Marcon", 
				"Pieron", 
				"Rimardo", 
				"Romero", 
				"Salazar", 
				"Umbero"
			]
		},
		Dragonborn: {
			Female: [
				"Akra", 
				"Biri", 
				"Daar", 
				"Farideh", 
				"Harann", 
				"Havilar", 
				"Jheri", 
				"Kava", 
				"Korinn", 
				"Mishann", 
				"Nala", 
				"Perra", 
				"Raiann", 
				"Sora", 
				"Surina", 
				"Thava", 
				"Uadjit"
			],
			Male: [
				"Arjhan", 
				"Balasar", 
				"Bharash", 
				"Donaar", 
				"Ghesh", 
				"Heskan", 
				"Kriv", 
				"Medrash", 
				"Mehen", 
				"Nadarr", 
				"Pandjed", 
				"Patrin", 
				"Rhogar", 
				"Shamash", 
				"Shedinn", 
				"Tarhun", 
				"Torinn"
			]
		},
		Dragonbornchild: [
			"Climber", 
			"Earbender", 
			"Leaper", 
			"Pious", 
			"Shieldbiter", 
			"Zealous"
		],
		Gnome: {
			Female: [
				"Bimpnottin", 
				"Breena", 
				"Caramip", 
				"Carlin", 
				"Donella", 
				"Duvamil", 
				"Ella", 
				"Ellyjobell", 
				"Ellywick", 
				"Lilli", 
				"Loopmottin", 
				"Lorilla", 
				"Mardnab", 
				"Nissa", 
				"Nyx", 
				"Oda", 
				"Orla", 
				"Roywyn", 
				"Shamil", 
				"Tana", 
				"Waywocket", 
				"Zanna"
			],
			Male: [
				"Alston", 
				"Alvyn", 
				"Boddynock", 
				"Brocc", 
				"Burgell", 
				"Dimble", 
				"Eldon", 
				"Erky", 
				"Fonkin", 
				"Frug", 
				"Gerbo", 
				"Gimble", 
				"Glim", 
				"Jebeddo", 
				"Kellen", 
				"Namfoodle", 
				"Orryn", 
				"Roondar", 
				"Seebo", 
				"Sindri", 
				"Warryn", 
				"Wrenn", 
				"Zook"
			]
		},
		GnomeNicknames: [
			"Aleslosh", 
			"Ashhearth", 
			"Badger", 
			"Cloak", 
			"Doublelock", 
			"Filchbatter", 
			"Fnipper", 
			"Ku", 
			"Nim", 
			"Oneshoe", 
			"Pock", 
			"Sparklegem", 
			"Stumbleduck"
		],
		HalfOrc: {
			Female: [
				"Baggi", 
				"Emen", 
				"Engong", 
				"Kansif", 
				"Myev", 
				"Neega", 
				"Ovak", 
				"Ownka", 
				"Shautha", 
				"Sutha", 
				"Vola", 
				"Volen", 
				"Yevelda"
			],
			Male: [
				"Dench", 
				"Feng", 
				"Gell", 
				"Henk", 
				"Holg", 
				"Imsh", 
				"Keth", 
				"Krusk", 
				"Mhurren", 
				"Ront", 
				"Shump", 
				"Thokk"
			]
		},
		Tiefling: {
			Female: [
				"Akta", 
				"Anakis", 
				"Bryseis", 
				"Criella", 
				"Damaia", 
				"Ea", 
				"Kallista", 
				"Lerissa", 
				"Makaria", 
				"Nemeia", 
				"Orianna", 
				"Phelaia", 
				"Rieta"
			],
			Male: [
				"Akmenos", 
				"Amnon", 
				"Barakas", 
				"Damakos", 
				"Ekemon", 
				"Iados", 
				"Kairon", 
				"Leucis", 
				"Melech", 
				"Mordai", 
				"Morthos", 
				"Pelaios", 
				"Skamos", 
				"Therai"
			]
		},
		TieflingVirtue: [
			"Art", 
			"Carrion", 
			"Chant", 
			"Creed", 
			"Despair", 
			"Excellence", 
			"Fear", 
			"Glory", 
			"Hope", 
			"Ideal", 
			"Music", 
			"Nowhere", 
			"Open", 
			"Poetry", 
			"Quest", 
			"Random", 
			"Reverence", 
			"Sorrow", 
			"Temerity", 
			"Torment", 
			"Weary"
		]

	},
	Last: {
		Dwarf: [
			"Balderk",
			"Battlehammer", 
			"Brawnanvil", 
			"Dankil", 
			"Fireforge", 
			"Frostbeard", 
			"Gorunn", 
			"Holderhek", 
			"Ironfist", 
			"Loderr", 
			"Lutgehr", 
			"Rumnaheim", 
			"Strakeln", 
			"Torunn", 
			"Ungart"
		],
		Elf: [
			"Amakiir (Gemflower)", 
			"Amastacia (Starflower)", 
			"Galanodel (Moonwhisper)", 
			"Holimion (Diamonddew)", 
			"Ilphelkiir (Gemblossom)", 
			"Liadon (Silverfrond)", 
			"Meliamne (Oakenheel)", 
			"Naïlo (Nightbreeze)", 
			"Siannodel (Moonbrook)", 
			"Xiloscient (Goldpetal)"
		],
		Halfling: [
			"Brushgather", 
			"Goodbarrel", 
			"Greenbottle", 
			"High-hill", 
			"Hilltopple", 
			"Leagallow", 
			"Tealeaf", 
			"Thorngage", 
			"Tosscobble", 
			"Underbough"
		],
		Human: [
			"Basha", 
			"Dumein", 
			"Jassan", 
			"Khalid", 
			"Mostana", 
			"Pashar", 
			"Rein",
			"Amblecrown", 
			"Buckman", 
			"Dundragon", 
			"Evenwood", 
			"Greycastle", 
			"Tallstag",
			"Bersk", 
			"Chernin", 
			"Dotsk", 
			"Kulenov", 
			"Marsk", 
			"Nemetsk", 
			"Shemov", 
			"Starag",
			"Brightwood", 
			"Helder", 
			"Hornraven", 
			"Lackman", 
			"Stormwind", 
			"Windrivver",
			"Ankhalab", 
			"Anskuld", 
			"Fezim", 
			"Hahpet", 
			"Nathandem", 
			"Sepret", 
			"Uuthrakt",
			"Chergoba", 
			"Dyernina", 
			"Iltazyara", 
			"Murnyethara", 
			"Stayanoga", 
			"Ulmokina",
			"Chien", 
			"Huang", 
			"Kao", 
			"Kung", 
			"Lao", 
			"Ling", 
			"Mei", 
			"Pin", 
			"Shin", 
			"Sum", 
			"Tan", 
			"Wan",
			"Agosto", 
			"Astorio", 
			"Calabra", 
			"Domine", 
			"Falone", 
			"Marivaldi", 
			"Pisacar", 
			"Ramondo"
		],
		Dragonborn: [
			"Clethtinthiallor", 
			"Daardendrian", 
			"Delmirev", 
			"Drachedandion", 
			"Fenkenkabradon", 
			"Kepeshkmolik", 
			"Kerrhylon", 
			"Kimbatuul", 
			"Linxakasendalor", 
			"Myastan", 
			"Nemmonis", 
			"Norixius", 
			"Ophinshtalajiir", 
			"Prexijandilin", 
			"Shestendeliath", 
			"Turnuroth", 
			"Verthisathurgiesh", 
			"Yarjerit"
		],
		Gnome: [
			"Beren", 
			"Daergel", 
			"Folkor", 
			"Garrick", 
			"Nackle", 
			"Murnig", 
			"Ningel", 
			"Raulnor", 
			"Scheppen", 
			"Timbers", 
			"Turen"
		]
	}

}

const abilities = {
	High: [
		// "Strength"
		["Very Powerful", "Very Brawny", "As strong as an ox"],
		// "Dexterity"
		["Very Lithe", "Very Agile", "Very Graceful"],
		// "Constitution"
		["Very Hardy", "Very Durable", "Very Healthy"],
		// "Intelligence"
		["Very Studious", "Very Learned", "Very Inquisitive"],
		// "Wisdom"
		["Very Perceptive", "Very Spiritual", "Very Insightful"],
		// "Charisma"
		["Very Persuasive", "Very Forceful", "A natural born leader"],
	],
	Low: [
		// "Strength"
		["Feeble", "Scrawny"],
		// "Dexterity"
		["Clumsy", "Fumbling"],
		// "Constitution"
		["Sickly", "Weak"],
		// "Intelligence"
		["Dim-witted", "Dumb"],
		// "Wisdom"
		["Oblivious", "Absentminded"],
		// "Charisma"
		["Dull", "Boring"],
	]
	
}

const talents = [
	["Plays the bagpipes", "Plays the drums", "Plays the dulcimer", "Plays the flute", "Plays the lute", "Plays the lyre", "Plays the horn", "Plays the pan flute", "Plays the shawm", "Plays the viol"],
	"Speaks several languages fluently",
	"Is unbelievably lucky",
	"Has a perfect memory",
	"Is great with animals",
	"Is great with children",
	"Is great at solving puzzles",
	["Is great at dice", "Is great at Dragonchess", "Is great at playing cards", "Is great at Three-Dragon Ante"],
	"Is great at impersonations",
	"Draws beautifully",
	"Paints beautifully",
	"Sings beautifully",
	"Can drink everyone under the table",
	"Is an expert carpenter",
	"Is an expert cook",
	"Is an expert dart thrower and rock skipper",
	"Is an expert juggler",
	"Is a skilled actor and master of disguise",
	"Is a skilled dancer",
	"Knows thieves cant"
]

const mannerisms = [
	["Is prone to singing quietly", "Is prone to humming quietly", "Is prone to whistling quietly"],
	["Speaks in rhyme", "Speaks in a distinctive way"],
	["Has a particularly low voice", "Has a particularly high voice"],
	["Slurs words", "Has a lisp", "Stutters"],
	"Enunciates overly clearly",
	"Speaks loudly",
	"Whispers",
	["Uses flowery speech", "Uses long words"],
	"Frequently uses the wrong word in place of another",
	["Uses colorful oaths", "Uses colorful exclamations"],
	["Makes constant jokes", "Makes constant puns"],
	"Is prone to predictions of doom",
	"Often fidgets",
	"Often squints",
	"Often stares into the distance",
	"Often chews on something",
	"Often paces",
	"Is prone to finger tapping",
	"Is prone to fingernail biting",
	["Often twirls hair", "Often tugs beard"]
]

const interactions = [
	"Argumentative",
	"Arrogant",
	"Blustering",
	"Rude",
	"Curious",
	"Friendly",
	"Honest",
	"Hot tempered",
	"Irritable",
	"Ponderous",
	"Quiet",
	"Suspicious"
]

// Generates an NPC with the following traits:
	// Name *
	// Sex *
	// Race *
	// Age *
	// Occupation and history
	// Appearance *
	// Abilities *
	// Talent *
	// Mannerism
	// Interactions with others
	// Useful Knowlege 
	// Ideal
	// Bond
	// Flaw or secret

class NPC {
	constructor() {
        this.sex = this.getSex();
        this.race = this.getRace();
        this.age = this.getAge(this.race)
        this.name = this.getName(this.race, this.sex, this.age)
        this.appearance = this.getAppearance();
        this.abilities = this.getAbilities();
        this.talent = this.getTalent();
        this.mannerism = this.getMannerism();
        this.interaction = this.getInteraction();
	}

	getAppearance() {
		return this.getTrait(appearances);
    }
    
    getSex() {
        return this.getTrait(sexes);
    }

    getRace() {
        return this.getTrait(races);
    }

    getName(race, sex, age) {
    	// Young elves have different first names
    	if (race == "Elf" && age < 100) {
    		return this.getTrait(names["First"]["Elfchild"]) + " " + this.getTrait(names["Last"][race]);
		// Young dragonborns have different first names
    	} else if (race == "Dragonborn" && age < 15) {
    		return this.getTrait(names["First"]["Dragonbornchild"]) + " " + this.getTrait(names["Last"][race]);
    	// Gnomes have a nickname
    	} else if (race == "Gnome") {
    		return this.getTrait(names["First"][race][sex]) + ` "${this.getTrait(names["First"]["GnomeNicknames"])}" ` + this.getTrait(names["Last"][race]);
		// Half elves take human or elf names
    	} else if (race == "Half-Elf") {
    		let coin = Math.floor(Math.random() * 2)
    		if (coin == 0) {
    			return this.getTrait(names["First"]["Elf"][sex]) + " " + this.getTrait(names["Last"]["Elf"]);
    		} else {
    			return this.getTrait(names["First"]["Human"][sex]) + " " + this.getTrait(names["Last"]["Human"]);
    		}
    	// Half orcs sometimes use human names and sometimes use orc names
    	} else if (race == "Half-Orc") {
    		let coin = Math.floor(Math.random() * 2)
    		if (coin == 0) {
    			return this.getTrait(names["First"]["HalfOrc"][sex]);
    		} else {
    			return this.getTrait(names["First"]["Human"][sex]) + " " + this.getTrait(names["Last"]["Human"]);
    		}
    	// Tieflings have "virtue" names at young age and only have first name
    	} else if (race == "Tiefling") {
    		if (age < 18) {
    			return this.getTrait(names["First"]["TieflingVirtue"]);
    		}
    		return this.getTrait(names["First"][race][sex]);
    	}
    	
    	return this.getTrait(names["First"][race][sex]) + " " + this.getTrait(names["Last"][race]);
    }

    getAbilities() {
    	let highTrait = 0;
    	let lowTrait = 0;
    	while (highTrait == lowTrait) {
	    	highTrait = Math.floor(Math.random() * 6);
	    	lowTrait = Math.floor(Math.random() * 6);
	    }

    	return [this.getTrait(abilities["High"][highTrait]), this.getTrait(abilities["Low"][lowTrait])]
    }

    getTalent() {
    	return this.getTrait(talents)
    }

    getAge(race) {
    	let age;
    	if (race == "Dwarf") {
    		age = Math.floor(Math.random() * 351);
    	} else if (race == "Elf") {
    		age = Math.floor(Math.random() * 751);
    	} else if (race == "Halfling") {
    		age = Math.floor(Math.random() * 151);
    	} else if (race == "Human") {
    		age = Math.floor(Math.random() * 101);
    	} else if (race == "Dragonborn") {
    		age = Math.floor(Math.random() * 81);
    	} else if (race == "Gnome") {
    		age = Math.floor(Math.random() * 500);
    	} else if (race == "Half-Elf") {
    		age = Math.floor(Math.random() * 182);
    	} else if (race == "Half-Orc") {
    		age = Math.floor(Math.random() * 76);
    	} else if (race == "Tiefling") {
    		age = Math.floor(Math.random() * 104);
    	}
    	return age;
    }

    getPronoun() {
    	if (this.sex == "Male") {
    		return "He"
    	} else {
    		return "She"
    	}
    }

    getMannerism() {
    	return this.getTrait(mannerisms);
    }

    getInteraction() {
    	return this.getTrait(interactions);
    }

    toString() {
    	let out = `${this.name} is a ${this.age} year old ${this.sex.toLowerCase()} ${this.race.toLowerCase()}. ${this.name.split(' ')[0]} ${this.getAppearance().toLowerCase()}. ${this.getPronoun()} is ${this.abilities[0].toLowerCase()}. ${this.getPronoun()} is also ${this.abilities[1].toLowerCase()}. ${this.name.split(' ')[0]} ${this.talent.toLowerCase()}. ${this.getPronoun()} ${this.mannerism.toLowerCase()}. When interacting with others, ${this.name.split(' ')[0]} tends to be ${this.interaction.toLowerCase()}.`
    	return out
    }
    
    // Takes a list with elements that may or may not be lists and selects random element
    // from the list or sublist
    getTrait(traits) {
        const getRandomElement = L => L[Math.floor(Math.random() * L.length)]
        let trait = getRandomElement(traits)
        if (typeof trait != "string") {
            trait = getRandomElement(trait)
        }
        return trait
    }
}

const foo = new NPC();

document.querySelector("#name").innerHTML = foo.name;

document.querySelector("#display").innerHTML = foo.toString();