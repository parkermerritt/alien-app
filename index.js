var words = {
    "apple": {
        translation: "Pomme",
    },
    "bowling": {
        translation: "Blah blah",
    },
    /* Note 1 */
    "ouuaieaiie": {
        translation: "One day on Venus is longer than one WHOLE year on Earth!",
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
        translation: "The moon was once part of Earth!",
    },
    "ooiaueiuei": {
        translation: "The moon was once part of Earth!",
    },
    "aeiiuuoe": {
        translation: "The moon was once part of Earth!",
    },
    "oiiueaie": {
        translation: "The moon was once part of Earth!",
    },
    "eieioouaie": {
        translation: "The moon was once part of Earth!",
    },
    "eeioouuie": {
        translation: "The moon was once part of Earth!",
    },
    /* Note 2 */
    "eiiouuaau": {
        translation: "The moon was once part of Earth!",
    },
    "oooiueeai": {
        translation: "The moon was once part of Earth!",
    },
    "uuiiaeiai": {
        translation: "The moon was once part of Earth!",
    },
    "aiaeeuioo": {
        translation: "The moon was once part of Earth!",
    },
    "eeeooiuai": {
        translation: "The moon was once part of Earth!",
    },
    "uuioioae": {
        translation: "The moon was once part of Earth!",
    },
    "uooiaeeaoiu": {
        translation: "The moon was once part of Earth!",
    },
    "uoiieaui": {
        translation: "The moon was once part of Earth!",
    },
    "iiioueeuiei": {
        translation: "The moon was once part of Earth!",
    },
    "eiouuai": {
        translation: "The moon was once part of Earth!",
    },
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
        message += "Searched: " + entryVal.value + "<br />";
        message += "Translation: " + words[entryId].translation + "<br />";

        document.getElementById("result").innerHTML = message;
        entryVal.value = "";
    } else {
        document.getElementById("result").innerHTML = "Not found";
    }
    entryVal.focus();
}