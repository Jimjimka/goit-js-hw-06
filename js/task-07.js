const inputEl= document.getElementById('font-size-control');
const textEl = document.getElementById('text');
console.log(textEl)

inputEl.addEventListener('input',(event)=>
   
    textEl.style.fontSize=`${event.target.value}px`
    
)


