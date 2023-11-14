
let billeder = ["media/img/forside.jpg", "media/img/blodprove.jpg", "media/img/Arbejdspladsen.jpg"];
const startBoxBilleder = document.getElementById("startBox");



// Henter URL'en på den side man er på lige nu
var currentURL = window.location.href;

// Den tjekker URLen for hvilken side man er på (Om urlen indeholder side navnet) og skifter billede
if (currentURL.includes("/index")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[0] + '")';
}
if (currentURL.includes("/blod")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[1] + '")';
}
if (currentURL.includes("/arbejdsplads")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[2] + '")';
}