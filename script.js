var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

// Get the carousel elements
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const carouselIndicators = document.querySelectorAll('.carousel-indicators li');

// Set the active carousel item
let activeItem = 0;

// Function to show the next carousel item
function showNextItem() {
  carouselItems[activeItem].classList.remove('active');
  activeItem = (activeItem + 1) % carouselItems.length;
  carouselItems[activeItem].classList.add('active');
  updateIndicators();
}

// Function to show the previous carousel item
function showPrevItem() {
  carouselItems[activeItem].classList.remove('active');
  activeItem = (activeItem - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[activeItem].classList.add('active');
  updateIndicators();
}

// Function to update the carousel indicators
function updateIndicators() {
  carouselIndicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === activeItem) {
      indicator.classList.add('active');
    }
  });
}



//////////////header searchicon js///////

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



