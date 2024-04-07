//declaring variables 
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
let slideIndex = [1,1];
let slideId = ["mySlides_2_1", "mySlides_2_2"];


menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});


// JAVASCRIPT ONLY FOR THE READ_THE_SKIES PAGE

if (window.location.pathname == '/read_the_skies.html') {
  showSlides(1, 0);
  showSlides(1, 1);

  //Here, dry code is implemented and is original (not adapted from elsewhere) 
  for (let i = 0; i < 2; i++) {
    prev[i].addEventListener('click', () => {
      plusSlides(-1, i);
    });
  
    next[i].addEventListener('click', () => {
      plusSlides(1, i);
    });
  }
}

/* This code was adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp 
This function takes the slide number (n) and the slideshow number (no) as parameters.
It then assigns the 'classes of that slideshow'/slides to the variable x.
All the slides are then set to not display. Only the slide specified by the parameter
'n' (-1 is used because it is an array) is set to display. */

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








