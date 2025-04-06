let wrapper = document.querySelector('.sl-wrapper')
let slider = document.querySelector('.sl-wrapper__inner')

let isActive = false
let startX = 0

let diff = 0
let prevDiff = 0

function startSwipe (e) {
  e.preventDefault()
  slider.style.cursor = "grabbing"
  isActive = true

  startX = e.clientX
}
function moveSwipe (e) {
  if(!isActive) {
    return
  }
  e.preventDefault()

  diff = (startX - e.clientX - prevDiff)

  const totalWidth = slider.scrollWidth
  const viewPortWidth = wrapper.clientWidth

  const currTranslation = -diff
  const maxTranslation = 0

  if(currTranslation < (viewPortWidth - totalWidth)) {
    diff += currTranslation - (viewPortWidth - totalWidth)
  }
  else if(currTranslation > maxTranslation) {
    diff += currTranslation
  }

  slider.style.transform = `translate3d(${-diff}px, 0, 0)`

}
function endSwipe () {
  isActive = false
  slider.style.cursor = "grab"
  prevDiff = -diff
}

wrapper.addEventListener('mousedown', startSwipe)
wrapper.addEventListener('mousemove', moveSwipe)

wrapper.addEventListener('mouseup', endSwipe)
wrapper.addEventListener('mouseleave', endSwipe)