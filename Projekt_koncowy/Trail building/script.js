
const slideInElements = document.querySelectorAll('.slide-in');

function checkSlide() {
  const triggerBottom = window.innerHeight * 0.9;
  slideInElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkSlide);
window.addEventListener('load', checkSlide);

// nav bar color change
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});
