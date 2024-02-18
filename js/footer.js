// Funcție pentru a realiza derularea către zona footer-ului
function scrollToFooter() {
    // Obțineți elementul footer
    var footerElement = document.getElementById('footer');

    // Realizați derularea către zona footer-ului
    footerElement.scrollIntoView({ behavior: 'smooth' });
}