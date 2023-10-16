const container = document.querySelector('.container');
const modalRules = document.querySelector('.modal-rules');
const modalRulesCloseBtn = document.querySelector('.modal-rules-close');
const timer = document.querySelector('.seconds');
const modalEnd = document.querySelector('.modal-end');
const body = document.querySelector('.body');
const scorePoints = document.querySelector('.score-points');
const big = document.querySelectorAll('.big');
const medium = document.querySelectorAll('.medium');
const small = document.querySelectorAll('.small');
const hit = document.querySelector('.hit');
const miss = document.querySelector('.miss');
const finalScore = document.querySelector('.final-score');
const modalForm = document.getElementById('modalForm');
const modalEndCloseBtn = document.querySelector('.modal-end-close');
const modalBoard = document.querySelector('.modal-board');
let input = document.querySelector('input');

let counter = 0;

let random = Math.random().toString().slice(0, 3) * 10;

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
    let stopTime = startTime.setSeconds(startTime.getSeconds() + 12);
    let countdown = setInterval(function() {
    let now = new Date().getTime();
    let remain = stopTime - now; 
    let sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    sec = sec < 10 ? "0" + sec : sec;
    timer.innerHTML = sec;
    if (remain < 0) {
      clearInterval(countdown);
     timer.innerHTML = '00';
     big.forEach((el) => {
        el.classList.add('nonactive');
    });
    medium.forEach((el) => {
        el.classList.add('nonactive');
    });
    small.forEach((el) => {
        el.classList.add('nonactive');
    });
      modalEnd.classList.add('active');
      finalScore.textContent = counter;
      body.classList.remove('active');
    }
      }, 1000);
    }

    function replay() {
        big.forEach((el) => {
            el.classList.remove('killed');
        });
        medium.forEach((el) => {
            el.classList.remove('killed');
        });
        small.forEach((el) => {
            el.classList.remove('killed');
        });
    }

    function playShot(e) {
        let el = e.target;
        if(el.classList.contains('big') || el.classList.contains('medium') || el.classList.contains('small')) {
         hit.stop();
         hit.play();
         counter++;
         scorePoints.textContent = counter;
         el.classList.add('killed');
         if(counter == 30) {
          setTimeout(replay,400);
         }
        } else {
         miss.stop();
         miss.play();
        }
       }

container.style.backgroundImage = `url(img/${background[random]})`;

big.forEach((el) => {
    el.classList.add('nonactive');
})

medium.forEach((el) => {
    el.classList.add('nonactive');
})

small.forEach((el) => {
    el.classList.add('nonactive');
})

modalRulesCloseBtn.addEventListener('click', function() {
    modalRules.classList.add('nonactive');
    body.classList.add('active');
    start();
    big.forEach((el) => {
        el.classList.remove('nonactive');
    });
    medium.forEach((el) => {
        el.classList.remove('nonactive');
    });
    small.forEach((el) => {
        el.classList.remove('nonactive');
    });
    container.addEventListener('click', playShot);
  })

  HTMLAudioElement.prototype.stop = function(){
    this.pause();
    this.currentTime = 0.0;
   }

modalEndCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modalEnd.classList.remove('active');
    modalBoard.classList.add('active');
    const userData = {
    }
    userData.name = input.value
        userData.score = counter;
        let userId = Date.now().toString(); 
    localStorage.setItem(userId, JSON.stringify(userData));
    })