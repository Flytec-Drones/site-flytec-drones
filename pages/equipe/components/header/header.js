function initializeHeader() {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-item');

    if (!hamburger || !nav) {
        console.log('Elementos do header não encontrados, tentando novamente em 100ms');
        setTimeout(initializeHeader, 100);
        return;
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            nav.classList.remove('is-active');
        });
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

initializeHeader();
