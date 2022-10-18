const btnsEl= document.getElementById('counter')
const valueEl = document.getElementById('value')
let counterValue = 0 

btnsEl.firstElementChild.addEventListener('click',()=>{valueEl.textContent=`${counterValue-=1}`})
btnsEl.lastElementChild.addEventListener('click',()=>{valueEl.textContent=`${counterValue+=1}`})

