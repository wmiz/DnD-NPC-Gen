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
    "Halfling",
    "Human",
    "Dragonborn",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Tiefling"
]

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
        this.appearance = this.getAppearance();
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
console.log(foo.appearance);