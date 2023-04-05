// Changing theme from light to dark and vice-versa

const themeToggle = document.getElementById('theme-toggle')

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
});

const themeToggleFotter = document.getElementById('theme-toggle-footer');

themeToggleFotter.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
});

const downTogglet = document.getElementById('scroll-down');

downTogglet.addEventListener('click',function(){
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
})

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let timeString =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0');
  document.getElementById('clock').innerHTML = timeString;
}
setInterval(updateClock, 1000);


document.addEventListener('mousemove', function (e) {
  let follower = document.querySelector('.follower')
  follower.style.top = e.clientY + 'px';
  follower.style.left = e.clientX + 'px';
});

var header = document.getElementById('header');
var content = document.getElementById('footer-floating');

window.addEventListener('scroll', function () {
  if (window.scrollY >= header.offsetHeight) {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});