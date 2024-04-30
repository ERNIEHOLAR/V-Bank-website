const slider = document.querySelector('.hero-images');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;

let counter = 1;

function slide() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;
}

setInterval(() => {
  if (counter >= slides.length) {
    counter = 0;
  }
  slide();
}, 2000);

