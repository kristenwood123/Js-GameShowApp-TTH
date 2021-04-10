const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase').children[0]
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
  let randomIndex = Math.floor(Math.random() * length)
  return newPhrase = [...phrases[randomIndex]]
}

getRandomPhraseAsArray(phrases)


const addPhraseToDisplay = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.textContent = arr[i];
    phrase.appendChild(li)
  }


}


addPhraseToDisplay(newPhrase)




// Create CSS transitions for each letter in the phrase display as they are revealed.
// Add a button to the “success” and “failure” screens that reset the game.You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.