if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {

    //Pronoun updater
    pronounDict = {
        "hh": "he/him",
        "hi": "he/it",
        "hs": "he/she",
        "ht": "he/they",
        "ih": "it/him",
        "ii": "it/its",
        "is": "it/she",
        "it": "it/they",
        "shh": "she/he",
        "sh": "she/her",
        "si": "she/it",
        "st": "she/they",
        "th": "they/he",
        "ti": "they/it",
        "ts": "they/she",
        "tt": "they/them"
    };

    const xhr = new XMLHttpRequest;

    pronounText = document.getElementsByClassName("intro-pronouns")[0];

    xhr.open("GET", "https://pronoundb.org/api/v1/lookup?platform=discord&id=449208129826062357");
    xhr.send();
    
    xhr.onload = function() {
        if (xhr.status != 404) {
            data = JSON.parse(xhr.responseText);
            if (data["pronouns"] != "unspecified")
            {
            pronounText.innerText = pronounDict[data["pronouns"]];
            } else {
                pronounText.innerText = "he/she";
            }
        } else {
            return;
        }
    }

    //Rainbow switch
    toggle = 0;
    rgbButton = document.getElementsByClassName("button-rgb")[0];
    rgbButton.addEventListener("click", rgbToggle);

    bodyElement = document.getElementsByTagName("body")[0];
    htmlElement = document.getElementsByTagName("html")[0];

    icons = document.getElementsByClassName("nav-links");
    for (i = 0; i < icons.length; i++) {
        svgs = icons[i].getElementsByTagName("svg");
    }

    function rgbToggle() {
        (toggle) ? rgbify("none", "none", 0) : rgbify("background-rainbow 7s linear 0s infinite", "color-rainbow 7s linear 0s infinite", 1);
    }

    function rgbify(bg, svg, state) {
        bodyElement.style.animation = htmlElement.style.animation = bg;
        for (i = 0; i < svgs.length; i++) {
            svgs[i].style.animation = svg;
        }
        toggle = state;
    }

}