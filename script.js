
let billeder = ["media/img/forside.jpg", "media/img/blodprove.jpg", "media/img/Arbejdspladsen.jpg","media/img/brit.jpg"];
const startBoxBilleder = document.getElementById("startBox");
const brittKnapper = document.getElementById("brittknapper");
const arbejdspladsKnapper = document.getElementById("arbejdspladsknapper");
const blodKnapper = document.getElementById("blodknapper");

// Henter URL'en på den side man er på lige nu
var currentURL = window.location.href;

// Den tjekker URLen for hvilken side man er på (Om urlen indeholder side navnet) og skifter billede
if (currentURL.includes("/index") || currentURL.includes("/forside")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[0] + '")';
}
if (currentURL.includes("/blod")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[1] + '")';
}
if (currentURL.includes("/arbejdsplads")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[2] + '")';
}
if (currentURL.includes("/britt")) {
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[3] + '")';
}


// Her kigger den på om musen er over Britt knappen og skifter billede
brittKnapper.onmouseover = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[3] + '")';
}
// Her kigger den på om musen er over arbejdsplads knappen og skifter billede
arbejdspladsKnapper.onmouseover = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[2] + '")';
}
// Her kigger den på om musen er over blod knappen og skifter billede
blodKnapper.onmouseover = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[1] + '")';
}  
    

// Her skifter billedet tilbage til det originale billede på forsiden
// når musen går væk fra knappen igen.
brittKnapper.onmouseleave = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[0] + '")';
}
arbejdspladsKnapper.onmouseleave = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[0] + '")';
}
blodKnapper.onmouseleave = function(){
    startBoxBilleder.style.backgroundImage = 'url("' + billeder[0] + '")';
}



// Scroll smooth ned til elementer

//laver en funkion kaldet scrollToSection, den får elementId når den bliver kalds
function scrollToSection(elementId) {

    //henter sektionen den skal sxroll til
    const element = document.getElementById(elementId);
    const offset = 250; // offset til headeren, kan justeres
    const position = element.offsetTop - offset; //finder positionen . Element.offsetTop er toppen af elementet - den bestemte offset

    //ruller ned til stedet og gør det smooth
    window.scrollTo({
        top: position,
        behavior: "smooth"
    });
}

brittKnapper.onclick = scrollToSection("")
arbejdspladsKnapper.onclick = scrollToSection("")
blodKnapper.onclick = scrollToSection("")



// Gif videoer der skal afspilles

//henter alle videoerne med deres klasse
const gifs = document.getElementsByClassName("rundVideo");

//For loop(løkke) laver en lokal variable. Tjekker hvor mange videoer der er
//Og køre koden hvis der er flere videoer, og når den har kørt koden gør den det igen
//denne gør at videoerne starter når man hover
for (let i = 0; i < gifs.length; i++) {
    gifs[i].onmouseover = function(){
        gifs[i].play();
    }
}
//denne gør at videoerne stopper når man ikke længere hover
for (let i = 0; i < gifs.length; i++) {
    gifs[i].onmouseleave = function(){
        gifs[i].pause();
    }
}


// Britt Lyden bliver hentet 
const brittLyd = document.getElementById("brittLyd");
const brittBil = document.getElementById("brittBillede");

//På hover skal den afspille
brittBil.onmouseover = function(){
    brittLyd.play();
}

// Når man stopper med hover stopper lyden og genstarter
brittBil.onmouseleave = function(){
    brittLyd.pause();
    brittLyd.load();
}


