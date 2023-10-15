const container = document.querySelector('.container');
const modalRules = document.querySelector('.modal-rules');
const modalRulesCloseBtn = document.querySelector('.modal-rules-close');
const timer = document.querySelector('.seconds');
const modalEnd = document.querySelector('.modal-end');

let random = Math.random().toString().slice(0, 3) * 10;
console.log(random);

let background = [
  "background1.jpg",
  "background2.jpg",
  "background3.png",
  "background4.jpg",
  "background5.png",
  "background6.png",
  "background7.jpg",
  "background8.png",
  "background9.jpg",
  "background10.jpg",
];

function start() {
    let startTime = new Date();
    let stopTime = startTime.setSeconds(startTime.getSeconds() + 32);
    let countdown = setInterval(function() {
    let now = new Date().getTime();
    let remain = stopTime - now; 
    let sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    sec = sec < 10 ? "0" + sec : sec;
    timer.innerHTML = sec;
    if (remain < 0) {
      clearInterval(countdown);
     timer.innerHTML = '00'
      modalEnd.classList.add('active');
    }
      }, 1000);
    }

container.style.backgroundImage = `url(img/${background[random]})`;

modalRulesCloseBtn.addEventListener('click', function() {
    modalRules.classList.add('nonactive');
    start();
  })