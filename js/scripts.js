
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

const slideshow1 = document.querySelector('.slideshow1');
const slideshow2 = document.querySelector('.slideshow2');
// const slides = document.querySelector('.slide');
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');

//let curSlide = 0;

// prev.addEventListener('click', () => {
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

// let slideIndex = 1;
// let slideshowName = "mySlides";
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName(slideshowName);
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "non";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

prev1.addEventListener('click', () => {
  plusSlides(-1);
  slides = document.getElementsByClassName("mySlides");
});

next1.addEventListener('click', () => {
  plusSlides(1);
  slides = document.getElementsByClassName("mySlides");
});

prev2.addEventListener('click', () => {
  plusSlides(-1);
  slides = document.getElementsByClassName("mySlides2");
});

next2.addEventListener('click', () => {
  plusSlides(1);
  slides = document.getElementsByClassName("mySlides2");
});


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
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


