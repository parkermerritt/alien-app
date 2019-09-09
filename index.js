var words = {
    "apple": {
        translation: "Pomme",
        meaning: "fruit, red, sweet",
        use: "For eating",
        etymology: "From middle english Appel"
    },
    "bowling": {
        translation: "Blah blah",
        meaning: "sport",
        use: "For recreation",
        etymology: "Some old sport"
    }
};

window.onload = onloadFunc;

function onloadFunc() {
    document.getElementById("search_button").onclick = myFunction;
}

function myFunction() {
    var entryVal = document.getElementById("entryInput");
    var entryId = entryVal.value.toLowerCase();
    if (entryId in words) {
        var message = "";
        message += "Searched: " + entryVal.value + "<br />";
        message += "Translation: " + words[entryId].translation + "<br />";

        document.getElementById("result").innerHTML = message;
        entryVal.value = "";
    } else {
        document.getElementById("result").innerHTML = "Not found";
    }
    entryVal.focus();
}