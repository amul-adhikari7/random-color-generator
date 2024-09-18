const button = document.getElementById('color-gen')

const color = document.querySelector('#hex-color')

const colors = ['#FF572F', '#F33D67', '#667667', '#322222']

const hex = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F'
]

function hexGenerator () {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  return hexColor
}

button.addEventListener('click', () => {
  let hexColor = hexGenerator()
  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
})

function getRandomNumber () {
  return Math.floor(Math.random() * hex.length)
}
