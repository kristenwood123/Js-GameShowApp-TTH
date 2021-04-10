const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const scoreboard = document.getElementById('scoreboard').children[0];
const heart = scoreboard.querySelectorAll('li');
let main = document.querySelector('.main-container');

let match = null;
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
  const letters = phrase.getElementsByTagName('li')
  const length = letters.length;

  for (let i = 0; i < length; i++) {
    if (letters[i].innerHTML === btn) {
      match = btn;
      console.log(match);
      return letters[i].classList.add('show')
    }
  } return match

}

startBtn.addEventListener('click', () => {
  main.children[0].remove()
})

qwerty.addEventListener('click', e => {
  let clickedBtn = e.target
  if (clickedBtn.className === 'keyrow') {
    return;
  } else {
    clickedBtn.classList.add('chosen');
    clickedBtn = clickedBtn.textContent;
  }
  let results = checkLetter(clickedBtn)
})


// Create CSS transitions for each letter in the phrase display as they are revealed.
// Add a button to the “success” and “failure” screens that reset the game.You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.