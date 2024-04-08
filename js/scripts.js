//declaring variables 
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const apiKey = 'Xm0JZSULBkpnJckbASJKoarSYPHCSfwsVzhWImlc'; 
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

  //Here, DRY CODE is implemented and is original (not adapted from elsewhere) 
  for (let i = 0; i < 2; i++) {
    prev[i].addEventListener('click', () => {
      plusSlides(-1, i);
    });
  
    next[i].addEventListener('click', () => {
      plusSlides(1, i);
    });
  }

  //Here, data is fetched from and posted on the site from the nasa APOD API
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const apodHtml = `
      <h2>${data.title}</h2>
      <img src="${data.url}" alt="${data.title}">
      <p>${data.explanation}</p>
    `;

    const imageContainer = document.getElementById('image-container');
    const title = document.getElementById('apod_title');
    const explanation = document.getElementById('apod_explanation');

    title.textContent = data.title;
    explanation.textContent = data.explanation;
    imageContainer.innerHTML = `<img id='apod_img' src="${data.url}" alt="${data.title}">`;
  })
  .catch(error => console.error(error));
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










