// ARBEJDSPLADSEN --> PARALLAX SCROLL
document.addEventListener("DOMContentLoaded", function () {
    var afdelingFoto = document.querySelector(".afdelingFoto");
    var parallaxEnabled = true; // Flag for at kontrollere, om parallax skal aktiveres
  
    function handleScroll() {
      if (parallaxEnabled) {
        var scrollPosition = window.scrollY;
  
        // Juster dette tal for at ændre parallax-effekten
        var parallaxValue = scrollPosition * 0.2;
  
        // Anvend parallax-effekten direkte til billederne
        Array.from(afdelingFoto.children).forEach(function (img) {
          img.style.transform = "translate3d(0, " + parallaxValue + "px, 0)";
        });
      }
    }
  
    // Lyt efter scrollhændelse og opdater parallax-effekten
    window.addEventListener("scroll", handleScroll);
  
    // Initial opdatering ved indlæsning
    handleScroll();
  
    // Lyt efter om scrollhøjden når bunden af dokumentet for at deaktivere parallax
    window.addEventListener("scroll", function () {
      var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
  
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY;
  
      if (scrollY + windowHeight >= documentHeight) {
        parallaxEnabled = false;
      } else {
        parallaxEnabled = true;
      }
    });
  });
  