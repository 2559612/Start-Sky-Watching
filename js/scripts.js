
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

const slideshow1 = document.querySelector('.slideshow1');
const slideshow2 = document.querySelector('.slideshow2');
const slides = document.querySelector('.slide');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
//let curSlide = 0;

// prevButton.addEventListener('click', () => {
//   curSlide--;
//   if (curSlide < 0) {
//     curSlide = slides.length - 1;
//   }
//   slideshow1.style.transform = `translateX(-${curSlide * 100}%)`;
// });

// nextButton.addEventListener('click', () => {
//   curSlide++;
//   if (curSlide >= slides.length) {
//     curSlide = 0;
//   }
//   slideshow1.style.transform = `translateX(-${curSlide * 100}%)`;
// });

// beginning of the slideshow1 code

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
