const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");

slides.forEach( (slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
next.addEventListener("click", () => {
  counter++;
  carousel();
});

prev.addEventListener("click", () => {
  counter--;
  carousel();
});
function carousel(){
    // working w/ slides
    // counter = counter === slides.length ? counter = 0 :
    //     counter < 0 ? counter = slides.length - 1 : counter
    // working with buttons
    next.style.display = counter < slides.length - 1 ?  'block' :  "none"
    prev.style.display = counter > 0 ? 'block' : 'none'
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prev.style.display = "none"