const colorGen = document.getElementById('color-gen')
const colorName = document.getElementById('rgba')
function getRandomColors () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  const randomColors = `rgb(${r},${g},${b})`
  return randomColors
}
colorGen.addEventListener('click', function () {
  const randomColor = getRandomColors()
  document.body.style.backgroundColor = randomColor
  colorName.textContent = randomColor
})
