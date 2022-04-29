if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {

    var birthdayDate = new Date('2005-01-04');
    var currDate = new Date();
    var ageMs = currDate - birthdayDate;
    var age = Math.floor(ageMs/31557600000); //1000*60*60*24*365.25

    console.log(age);

    var content = document.getElementsByClassName("about-age")[0];
    content.innerHTML = age;

}