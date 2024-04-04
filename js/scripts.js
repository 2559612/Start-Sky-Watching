
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

// const prev_3_1 = document.querySelector('.prev_3_1');
// const next_3_1 = document.querySelector('.next_3_1');
// const prev_3_2 = document.querySelector('.prev_3_2');
// const next_3_2 = document.querySelector('.next_3_2');
// const prev_3_3 = document.querySelector('.prev_3_3');
// const next_3_3 = document.querySelector('.next_3_3');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');

let slideIndex = [1,1,1];
let slideId = ["mySlides_3_1", "mySlides_3_2", "mySlides_3_3"];
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

for (let i = 0; i < 3; i++) {
  prev[i].addEventListener('click', () => {
    plusSlides(-1, i);
  });

  next[i].addEventListener('click', () => {
    plusSlides(1, i);
  });
}







