const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input',(event)=>{
    if(event.target.value!==''){
  outputEl.textContent=event.target.value
    } else {outputEl.textContent='Anonymous'} 
    
})
