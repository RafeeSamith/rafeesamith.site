if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
}

function ready() {
    var buttons = document.getElementsByClassName("btn-link");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.setAttribute("style", `background-image: url("../../images/links/${button.classList[1]}.png")`)
    }
}