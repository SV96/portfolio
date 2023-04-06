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

// image pick
const checkDomain = window.location.href.split('.').includes('github');

const imageLocation = checkDomain
  ? 'https://sv96.github.io/portfolio/assests/'
  : '/assests/';

const imageObj = {
  'dark-image': `${imageLocation}weather-moon.svg`,
  'light-image': `${imageLocation}Weather-Sun.png`,
  'my-name-image': `${imageLocation}name-img.png`,
  'web-dev-image': `${imageLocation}web-dev.webp`,
  'India-image': `${imageLocation}location.webp`,
  'graduate-image': `${imageLocation}graduation.png`,
  'react-js-image': `${imageLocation}react.png`,
  'node-js-image': `${imageLocation}nodejs.png`,
  'python-image': `${imageLocation}python.jpg`,
  'express-js-image': `${imageLocation}express.png`,
  'django-image': `${imageLocation}django.svg`,
  'down-arrow-image': `${imageLocation}down-arrow.png`,
  'dark-footer-image': `${imageLocation}weather-moon.svg`,
  'light-footer-image': `${imageLocation}Weather-Sun.png`,
};

for(let imgKey in imageObj){
  const image = document.getElementById(imgKey);
  const newImageSrc = imageObj[imgKey];
  image.src = newImageSrc;
}