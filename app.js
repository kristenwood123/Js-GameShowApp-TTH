const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const scoreboard = document.getElementById('scoreboard')
const overlay = document.getElementById('overlay')
const hearts = document.querySelectorAll('.tries img')
const main = document.querySelector('.main-container');

//resetting game


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
  let randomIndex = Math.floor(Math.random() * length)
  return newPhrase = [...phrases[randomIndex]]
}
getRandomPhraseAsArray(phrases)


const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i++) {
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
    resetGame()
  } else if (missed > 4) {
    overlay.classList.add('lost');
    overlay.children[0].innerHTML = 'You lost!'
    overlay.style.display = 'flex'
    resetGame()
  }
}

const resetGame = () => {
  startBtn.innerHTML = 'Reset Game'
  startBtn.addEventListener('click', () => {
    missed = 0;
    let resetLetters = document.getElementsByClassName('letter')
    let resetBtns = document.querySelectorAll('button')
    for (let i = 0; i < resetLetters.length; i++) {
      if (resetLetters[i].classList.contains('show')) {
        resetLetters[i].classList.remove('show')
      }
    }
    for (let i = 0; i < resetBtns.length; i++) {
      if (resetBtns[i].classList.contains('chosen')) {
        resetBtns[i].classList.remove('chosen')
      }
    } for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute('src', 'images/liveHeart.png')
    }
  })
  getRandomPhraseAsArray(phrases)
}

startBtn.addEventListener('click', () => {
  main.children[0].style.display = 'none'
})

qwerty.addEventListener('click', e => {
  let clickedBtn = e.target
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


// Create CSS transitions for each letter in the phrase display as they are revealed.
// Add a button to the “success” and “failure” screens that reset the game.You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.