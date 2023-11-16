// Hent alle sektioner med billeder
const faellesskabFotoWithImages = document.querySelectorAll('.faellesskabFoto');
const boernFotoWithImages = document.querySelectorAll('.boernFoto');
const afdelingFotoWithImages = document.querySelectorAll('.afdelingFoto');


// Opretter en Intersection Observer med funktionen for at kontrollere synlighed
const observer = new IntersectionObserver(checkVisibility, { threshold: 0.5 });

// Tilføj hver sektion med billeder til observeren
faellesskabFotoWithImages.forEach((section) => {
    observer.observe(section);
});
// Tilføj hver sektion med billeder til observeren
boernFotoWithImages.forEach((section) => {
    observer.observe(section);
});
// Tilføj hver sektion med billeder til observeren
afdelingFotoWithImages.forEach((section) => {
    observer.observe(section);
});

// Funktion for at kontrollere synligheden af sektioner
function checkVisibility(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } 
    });
}