function initializeAboutCards() {
    const mvvCards = document.querySelectorAll('.about__card');
    if (!mvvCards || mvvCards.length === 0) {
        // Se os cards não forem encontrados, tenta novamente em 100ms
        setTimeout(initializeAboutCards, 100);
        return;
    }

    const isMobile = window.innerWidth < 900;

    if (isMobile) {
        // --- LÓGICA PARA MOBILE (Ativar com Scroll) ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                if (entry.isIntersecting) {
                    card.classList.add('active'); // Adiciona .active
                } else {
                    card.classList.remove('active'); // Remove .active
                }
            });
        }, {
            // 70% centrais da tela (aproximado com threshold e rootMargin)
            threshold: 0.7, 
            rootMargin: '0px 0px -30% 0px' 
        });

        mvvCards.forEach(card => observer.observe(card));

    } else {
        // --- LÓGICA PARA DESKTOP (Ativar com Click) ---
        mvvCards.forEach(card => {
            card.addEventListener('click', () => {
                // Opcional: fecha outros cards ao clicar em um novo
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
}

// Inicia a verificação dos cards assim que o script é carregado
initializeAboutCards();