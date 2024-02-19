menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

const slideshow = document.querySelector('.slideshow');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
});