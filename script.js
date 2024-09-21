const carouselItems = document.querySelectorAll('.carousel-item');

window.addEventListener('scroll', () => {
    carouselItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            item.querySelector('img').style.transform = 'scale(1.2)';
        } else {
            item.querySelector('img').style.transform = 'scale(1)';
        }
    });
});
