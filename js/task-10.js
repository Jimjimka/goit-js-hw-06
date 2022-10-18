function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const listEl = document.querySelector('#boxes');
const conrolesEl = document.querySelector('#controls')
const inputEl=conrolesEl.firstElementChild;
const createBtnEl=inputEl.nextElementSibling;



inputEl.addEventListener('change',(event)=>{
  console.log(event.target.value);
  })

const createBoxes=amount=>{
  const mass =[]
  for(let i=0; i<amount; i+=1){
    mass.push('<div></div>')
  }
   listEl.innerHTML=mass.join('')
   console.log('hi');
}




createBtnEl.addEventListener('click',createBoxes);







// ()=>{console.log('hi')}

// const xxx =(event)=>{
//   console.log(inputEl.value);
// }