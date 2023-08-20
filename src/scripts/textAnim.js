const ofertaMainTextBlock = document.getElementById('oferta-main-text-block');

function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = ofertaMainTextBlock.offsetTop + ofertaMainTextBlock.offsetHeight / 2;

    if (scrollPosition >= elementPosition) {
        ofertaMainTextBlock.classList.add('animate-show');
    }
}

window.addEventListener('scroll', handleScroll);