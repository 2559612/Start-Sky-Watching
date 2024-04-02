
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

const slideshow31 = document.querySelector('.slideshow31');
const slideshow32 = document.querySelector('.slideshow32');
// const slides = document.querySelector('.slide');
const prev31 = document.querySelector('.prev31');
const next31 = document.querySelector('.next31');
const prev32 = document.querySelector('.prev32');
const next32 = document.querySelector('.next32');

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



// let slideIndex = 1;
// showSlides1(slideIndex);
// showSlides2(slideIndex)



let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides31", "mySlides32"]
showSlides(1, 0);
showSlides(1, 1);

prev31.addEventListener('click', () => {
  plusSlides(-1, 0)
});

next31.addEventListener('click', () => {
  plusSlides(1, 0)
});

prev32.addEventListener('click', () => {
  plusSlides(-1, 1)
});

next32.addEventListener('click', () => {
  plusSlides(1, 1)
});


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
