// Lazy loading images

/* MIT License

Copyright (c) 2015 Andrea Verlicchi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

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