document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');

    const menuItens = document.querySelectorAll('.menu-item');

    menuItens.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburgerBtn && menu) {
                hamburgerBtn.classList.remove('is-active');
                menu.classList.remove('is-active');
            }
        })
    })

    if (hamburgerBtn && menu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
});