import './style.css'

function setHeight() {
  const leftWrapperContentP = document.querySelector<HTMLDivElement>('.left__wrapper-content')
  const leftWrapperHeaderP = document.querySelector<HTMLDivElement>('.header-item')
  if (leftWrapperContentP && leftWrapperHeaderP) {
    let heightw = leftWrapperContentP.offsetHeight
    leftWrapperHeaderP.style.height = `${heightw / 3}px`
  }
}
setHeight()
window.onresize = setHeight

var addText = () => {
  const text = document.querySelector<HTMLParagraphElement>('.left__wrapper-content p')
  if (text) {
    text.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sequi recusandae quasi corporis fugit dolorum eveniet facere voluptatibus tempore culpa dolores distinctio iure molestias eius, unde quis quos totam commodi?ea`
    console.log('ye')
  }
  console.log('not if')
}
