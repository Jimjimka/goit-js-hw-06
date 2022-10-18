function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.getElementsByTagName('body');
const nameBcgColorEl= document.querySelector('.color');




btnEl.addEventListener('click',(event)=>{
  let bcgColor = getRandomHexColor()
  bodyEl[0].style.backgroundColor=bcgColor
  nameBcgColorEl.textContent =bcgColor
  

} )

