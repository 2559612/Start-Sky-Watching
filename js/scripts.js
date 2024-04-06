
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});


const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');


let slideIndex = [1,1];
let slideId = ["mySlides_2_1", "mySlides_2_2"];
showSlides(1, 0);
showSlides(1, 1);

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

for (let i = 0; i < 2; i++) {
    prev[i].addEventListener('click', () => {
      plusSlides(-1, i);
    });
  
    next[i].addEventListener('click', () => {
      plusSlides(1, i);
    });
  }








