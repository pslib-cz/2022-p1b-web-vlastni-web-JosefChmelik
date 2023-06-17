const arrowDown = document.querySelector('.arrowDown');

arrowDown.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
    
    arrowDown.style.display = 'none';
});