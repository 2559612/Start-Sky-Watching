
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

const slideshow_2_1 = document.querySelector('.slideshow_2_1');
const slideshow_2_2 = document.querySelector('.slideshow_2_2');
const slideshow_3_1 = document.querySelector('.slideshow_3_1');
const prev_2_1 = document.querySelector('.prev_2_1');
const next_2_1 = document.querySelector('.next_2_1');
const prev_2_2 = document.querySelector('.prev_2_2');
const next_2_2 = document.querySelector('.next_2_2');
const prev_3_1 = document.querySelector('.prev_3_1');
const next_3_1 = document.querySelector('.next_3_1');


let slideIndex = [1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides_2_1", "mySlides_2_2", "mySlides_3_1"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

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

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

prev_2_1.addEventListener('click', () => {
  plusSlides(-1, 0)
});

next_2_1.addEventListener('click', () => {
  plusSlides(1, 0)
});

prev_2_2.addEventListener('click', () => {
  plusSlides(-1, 1)
});

next_2_2.addEventListener('click', () => {
  plusSlides(1, 1)
});

prev_3_1.addEventListener('click', () => {
  plusSlides(-1, 2)
});

next_3_1.addEventListener('click', () => {
  plusSlides(1, 2)
});







