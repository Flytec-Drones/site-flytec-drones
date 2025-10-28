function initializeAboutCards() {
    const mvvCards = document.querySelectorAll('.about__card');
    if (!mvvCards || mvvCards.length === 0) {
        // Se os cards não forem encontrados, tenta novamente em 100ms
        setTimeout(initializeAboutCards, 100);
        return;
    }

    const isMobile = window.innerWidth < 900;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            if (entry.isIntersecting) {
                if (isMobile) {
                    card.classList.add('active');
                } else {
                    card.classList.add('expanded');
                }
            } else {
                if (isMobile) {
                    card.classList.remove('active');
                } else {
                    card.classList.remove('expanded');
                }
            }
        });
    }, {
        threshold: isMobile ? 0.8 : 0.5,
        rootMargin: isMobile ? '0px 0px -40% 0px' : '0px'
    });

    mvvCards.forEach(card => observer.observe(card));

    mvvCards.forEach(card => {
        card.addEventListener('click', () => {
            if (isMobile) {
                card.classList.toggle('active');
            } else {
                card.classList.toggle('expanded');
            }
        });
    });
}

// Inicia a verificação dos cards assim que o script é carregado
initializeAboutCards();