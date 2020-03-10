const range = n => [...Array(n)].map((_, i) => i)

const appearances = [
    ["a distinctive necklace", "a distinctive ciriclet", "a distinctive bracelet"],
    "a piercing on", // *** Bodyparts,
    "Flamboyant or outlandish clothes",
    "Formal, clean clothes",
    "Ragged, dirty clothes",
    "Prounounced scar", // Bodyparts,
    // range(32).map(),// "Missing Teeth", // 1d32,
    "Missing fingers", // 1d10,
    "Unusual eye color (or two different colors", // Unusual colors,
    "Tattoos", //Bodyparts,
    "Birthmark", //Bodyparts,
    "Unusual skin color", // Unusual colors,
    "Bald",
    ['Braided beard', 'Braided hair'], // "Braided beard or hair", // 1d2,
    "Unusual hair color", // Unusual colors,
    "Nervous eye twitch" ,
    "Distinctive nose" ,
    ["Crooked posture", "Rigid posture"],
    "Exceptionally beautiful",
    "Exceptionally ugly"
]

const sexes = [
    "Female",
    "Male"
]

const races = [
    "Dwarf",
    "Elf",
    // "Halfling",
    // "Human",
    // "Dragonborn",
    // "Gnome",
    // "Half-Elf",
    // "Half-Orc",
    // "Tiefling"
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
		}
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
	"Plays a musical instrument",
	"Speaks several languages fluently",
	"Unbelievably lucky",
	"Has a perfect Memory",
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

// Generates an NPC with the following traits:
// Sex *
// Race *
// Age *
// Occupation and history
// Appearance
// Abilities *
// Talent *
// Mannerism
// Interactions with others
// Useful Knowlege ***
// Ideal
// Bond
// Flaw or secret

class NPC {
	constructor() {
        this.sex = this.getSex();
        this.race = this.getRace();
        this.name = this.getName(this.race, this.sex)
        this.age = this.getAge(this.race)
        this.appearance = this.getAppearance();
        this.abilities = this.getAbilities();
        this.talent = this.getTalent();
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

    getName(race, sex) {
    	return this.getTrait(names["First"][race][sex]) + " " + this.getTrait(names["Last"][race])
    }

    getAbilities() {
    	return [this.getTrait(abilities["High"]), this.getTrait(abilities["Low"])]
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

    toString() {
    	let out = `${this.name} is a ${this.age} year old ${this.sex.toLowerCase()} ${this.race.toLowerCase()}. ${this.getPronoun()} is ${this.abilities[0].toLowerCase()}. However, ${this.getPronoun().toLowerCase()} is also ${this.abilities[1].toLowerCase()}. ${this.name.split(' ')[0]} ${this.talent.toLowerCase()}.`
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
console.log(foo.toString());

document.querySelector("#display").innerHTML = foo.toString();