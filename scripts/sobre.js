document.addEventListener('DOMContentLoaded', () => {

    const mvvCards = document.querySelectorAll('.card'); 
    
    mvvCards.forEach(card => {
        const description = card.querySelector('.description');
        const originalHeight = window.getComputedStyle(card).height;

        card.addEventListener('mouseover', () => {
            card.classList.add('expanded');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('expanded');
        });
    });

    const button = document.querySelector('.explore');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollBy({
            top: 500,
            behavior: 'smooth'
        });
    });
});