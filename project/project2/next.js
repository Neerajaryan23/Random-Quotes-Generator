let slidIndex = 0;
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;

function showSlides(){
  slide.forEach((slide,index) => {
    if(index === slidIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
})

function prevSlide() {
  slidIndex--;
  if (slidIndex < 0) {
    slidIndex = totalSlides - 1;
  }
  showSlides();
}

function nextSlide() {
  slidIndex++;
  if (slidIndex >= totalSlides) {
    slidIndex = 0;
  }
  showSlides();
}
}