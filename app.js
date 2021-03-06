const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const startBtn = document.querySelector('.btn__reset');
const scoreboard = document.getElementById('scoreboard')
const overlay = document.getElementById('overlay')
const hearts = document.querySelectorAll('.tries img')
const main = document.querySelector('.main-container');

let missed = 0;

const phrases = [
  'Salt and Pepper',
  'Pumpkin spice latte',
  'I kissed a frog',
  'A piece of cake',
  'It takes two to tango'
];


const getRandomPhraseAsArray = phrases => {
  const length = phrases.length
  //getting random number 0 - 4
  let randomIndex = Math.floor(Math.random() * length)
  newPhrase = [...phrases[randomIndex]]
  return newPhrase
}
getRandomPhraseAsArray(phrases)


const addPhraseToDisplay = arr => {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const li = document.createElement('li')
    li.textContent = arr[i];
    phrase.appendChild(li)
    if (li.textContent !== ' ') {
      li.classList.add('letter')
    } else {
      li.classList.add('space')
    }
  }
}
addPhraseToDisplay(newPhrase)


const checkLetter = btn => {
  const letters = phrase.querySelectorAll('li')
  const length = letters.length;
  let match = null;

  for (let i = 0; i < length; i++) {
    if (letters[i].innerHTML.toLowerCase() === btn) {
      match = btn;
      letters[i].classList.add('show')
    }
  }
  return match;
}

const checkWin = () => {
  let letterClasses = document.querySelectorAll('.letter')
  let showClasses = document.querySelectorAll('.show');

  if (letterClasses.length === showClasses.length) {
    overlay.classList.add('win');
    overlay.children[0].innerHTML = 'You won!'
    overlay.style.display = 'flex'
    startBtn.innerHTML = 'Reset'
  } else if (missed > 4) {
    overlay.classList.add('lost');
    overlay.children[0].innerHTML = 'You lost!'
    overlay.style.display = 'flex'
    startBtn.innerHTML = 'Reset'
  }
}

//Event Listeners 
startBtn.addEventListener('click', () => {
  if (startBtn.textContent === 'Start Game') {
    overlay.style.display = 'none';
  } else if (startBtn.textContent === 'Reset') {
    location.reload()
  }
})

qwerty.addEventListener('click', e => {
  let clickedBtn = e.target
  clickedBtn.disabled = true;
  if (clickedBtn.className === 'keyrow') {
    return;
  } else {
    clickedBtn.classList.add('chosen');
    clickedBtn = clickedBtn.textContent;
  }
  let result = checkLetter(clickedBtn)
  if (result === null) {
    missed += 1;
    //remove the first heart in the list of hearts
    hearts[missed - 1].setAttribute("src", "images/lostHeart.png");
  }
  checkWin()
})
