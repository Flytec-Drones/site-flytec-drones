function initializeAboutCards() {
    const mvvCards = document.querySelectorAll('.about__card');
    if (!mvvCards || mvvCards.length === 0) {
        // Se os cards não forem encontrados, tenta novamente em 100ms
        setTimeout(initializeAboutCards, 100);
        return;
    }

    const isMobile = window.innerWidth < 900;

    if (!isMobile) {
        mvvCards.forEach(card => {
            card.addEventListener('click', () => {
                mvvCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('expanded');
                    }
                });
                
                // Abre/fecha o card clicado
                card.classList.toggle('expanded');
            });
        });
    }
    // Se for mobile, nada acontece. Os cards serão controlados pelo CSS.
}

// Inicia a verificação dos cards assim que o script é carregado
initializeAboutCards();