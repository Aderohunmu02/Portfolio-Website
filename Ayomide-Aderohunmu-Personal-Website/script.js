const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
const heading = document.querySelector('.skillsh2');

// Create the animation
anime({
  targets: heading,
  translateX: [-20, 20],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  duration: 3000
});
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
var section1 = document.querySelector('#Home');
var section2 = document.querySelector('#Skills');
var section3 = document.querySelector('#Projects');
var section4 = document.querySelector('#Contact');

document.querySelector('a[href="#Home"]').addEventListener('click', function() {
  smoothScroll('#Home', 1000);
});

document.querySelector('a[href="#Skills"]').addEventListener('click', function() {
  smoothScroll('#Skills', 1000);
});

document.querySelector('a[href="#Projects"]').addEventListener('click', function() {
  smoothScroll('#Projects', 1000);
});

document.querySelector('a[href="#Contact"]').addEventListener('click', function() {
  smoothScroll('#Contact', 1000);
});
