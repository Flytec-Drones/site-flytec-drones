document.addEventListener('DOMContentLoaded', () => {
        const mvvCards = document.querySelectorAll('.card');
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

        const button = document.querySelector('.explore');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const quemSomosSection = document.getElementById('quem-somos');
            quemSomosSection.scrollIntoView({
                behavior: 'smooth'
            });
        });

        mvvCards.forEach(card => {
            card.addEventListener('click', () => {
                if (isMobile) {
                    card.classList.toggle('active');
                } else {
                    card.classList.toggle('expanded');
                }
            });
        });
    });