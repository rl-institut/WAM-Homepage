// Lazy loading images

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

// Animations on scroll
AOS.init({
  duration: 1000,
  disable: "mobile"
});

// Highlight navigation item on scroll
// https://codepen.io/mishunov/pen/opeRdL
const sections = document.querySelectorAll('section.section');
const config = {
  rootMargin: '-50px 0px -55%'
};

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      intersectionHandler(entry); 
    }
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('nav li a.active');
  const shouldBeActive = document.querySelector('nav li a[data-ref=' + id + ']');

  if (currentlyActive) {
    currentlyActive.classList.remove('active');
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add('active');
  }
}