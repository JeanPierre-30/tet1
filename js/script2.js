const slider = document.querySelector('.event-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 320; // Ajusta según el ancho de tus tarjetas
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 320; // Ajusta según el ancho de tus tarjetas
});