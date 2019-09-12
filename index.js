var words = {
    "apple": {
        translation: "Pomme",
    },
    /* Note 1 */
    "ouuaieaiie": {
        translation: "One day on Venus is longer than one WHOLE year on Earth!",
    },
     "ieieoooauu": {
        translation: "There are some stars that spin over 600 times PER SECOND.",
    },
    "aieaoouiua": {
        translation: "NASA believes there may be planets made completely of diamond!",
    },
    "uoiieaaui": {
        translation: "The planet Mercury is slowly shrinking.",
    },
    "eiouuaio": {
        translation: "Mercury and Venus are the only planets in our solar system without moons!",
    },
    "eeouiaaaeu": {
        translation: "The largest known asteroid is 600 miles wide.",
    },
    "ieieooooauu": {
        translation: "The moon was once part of Earth!",
    },
    "aieoouiua": {
        translation: "There is a volcano on Mars 3 times bigger than Mt. Everest.",
    },
    "iiieaoueeo": {
        translation: "Over one million Earths could fit inside the sun!",
    },
    "ooiaueiuei": {
        translation: "There are over 500,000 pieces of space junk orbiting Earth.",
    },
    "aeiiuuoe": {
        translation: "Earth is hit by an asteroid the size of a car once a year!",
    },
    "oiiueaie": {
        translation: "Scientists believe there are BILLIONS of galaxies in the universe.",
    },
    "eieioouaie": {
        translation: "If you could fly a plane to Pluto, the trip would take 800 years!",
    },
    "eeioouuie": {
        translation: "There are at least 166 moons in our solar system!",
    },
    "aaieouu": {
        translation: "Space is completely silent... there's no sound at all!",
    },
    /* Note 2 */
    "eiiouuaau": {
        translation: "Venus is the second brightest object in the night sky.",
    },
    "oooiueeai": {
        translation: "Over a third of Pluto is made of water.",
    },
    "uuiiaeiai": {
        translation: "The footprints from the first mission will stay on the moon at least 100 million years.",
    },
    "aiaeeuioo": {
        translation: "If two pieces of metal touch in space, they will permanently stick together.",
    },
    "eeeooiuai": {
        translation: "Jupiter's Great Red Spot is a storm that has been raging over 350 years! ",
    },
    "uuioioae": {
        translation: "It takes the planet Uranus 84 years to circle around the sun.",
    },
    "uooiaeeaoiu": {
        translation: "The solar system is 4.6 billion years old.",
    },
    "uoiieaui": {
        translation: "The sun weighs 330,000 times more than Earth!",
    },
    "iiioueeuiei": {
        translation: "Pluto is smaller than the United States!",
    },
    "eiouuai": {
        translation: "There are more volcanoes on Venus than any other planet.",
    },
    /* Additional words */
};

window.onload = onloadFunc;

function onloadFunc() {
    document.getElementById("search_button").onclick = myFunction;
}

function myFunction() {
    var entryVal = document.getElementById("entryInput");
    var entryId = entryVal.value.toLowerCase();

    if (entryId in words) {
        var message = "<br />";
        message += "<b>Alien Word: </b>" + entryVal.value + "<br />";
        message += "<b>Translation: </b>" + words[entryId].translation + "<br />";

        document.getElementById("result").innerHTML = message;
        entryVal.value = "";
    } else {
        document.getElementById("result").innerHTML = "<br />Translation not found";
    }
    document.activeElement.blur();
}
