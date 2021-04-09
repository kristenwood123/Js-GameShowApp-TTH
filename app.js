const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const startBtn = document.querySelector('.btn__reset')
let main = document.querySelector('.main-container')

let missed = 0;

startBtn.addEventListener('click', () => {
  main.children[0].remove()
})

const phrases = [
  'Salt and Pepper',
  'Pumpkin spice latte',
  'I kissed a frog',
  'A piece of cake',
  'It takes two to tango'
];

const getRandomPhraseAsArray = (phrases) => {
  const length = phrases.length
  //choose random index 
  let randomIndex = Math.floor(Math.random() * length)
  //choose random phrase in phrases array
  //split that phrase into a new array of characters
  let phrase = [...phrases[randomIndex]]
  console.log(phrase);


  //return the new chracter array
}

getRandomPhraseAsArray(phrases)
















// Create CSS transitions for each letter in the phrase display as they are revealed.
// Add a button to the “success” and “failure” screens that reset the game.You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.