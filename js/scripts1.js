
menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});


const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');


let slideIndex = [1,1];
let slideId = [["mySlides_2_1", "mySlides_2_2"], ["mySlides_3_1", "mySlides_3_2", "mySlides_3_3"]];
showSlides(1, 0, 0);
showSlides(1, 1, 0);
showSlides(1, 0, 1);
showSlides(1, 1, 1);
showSlides(1, 2, 1);

function showSlides(n, no, p) {
  let i;
  let x = document.getElementsByClassName(slideId[p[no]]);
  if (n > x.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

function plusSlides(n, no, p) {
  showSlides(slideIndex[no] += n, no, p);
}

for (let j = 0; j < 2; j++){
  for (let i = 0; i < 5; i++) {
    prev[i].addEventListener('click', () => {
      plusSlides(-1, i, j);
    });
  
    next[i].addEventListener('click', () => {
      plusSlides(1, i, j);
    });
  }
}









