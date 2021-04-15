// Lazy loading images

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

// Animate sections
const allSections = document.querySelectorAll('.js-section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.add('js-section--animate');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});