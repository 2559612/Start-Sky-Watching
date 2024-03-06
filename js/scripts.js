
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

// beginning of the slideshow code

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
