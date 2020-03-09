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
    // "Elf",
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

// Generates an NPC with the following traits:
// Sex
// Race
// Occupation and history
// Appearance
// Abilities
// Talent
// Mannerism
// Interactions with others
// Ideal
// Bond
// Flaw or secret

class NPC {
	constructor() {
        this.sex = this.getSex();
        this.race = this.getRace();
        this.name = this.getName(this.race, this.sex)
        this.appearance = this.getAppearance();
        this.abilities = this.getAbilities();
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
    getPronoun() {
    	if (this.sex == "Male") {
    		return "He"
    	} else {
    		return "She"
    	}
    }

    toString() {
    	let out = `${this.name} is a ${this.sex} ${this.race}. ${this.getPronoun()} is ${this.abilities[0].toLowerCase()}. However, ${this.getPronoun().toLowerCase()} is also ${this.abilities[1].toLowerCase()}.`
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