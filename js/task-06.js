const inputEl = document.getElementById('validation-input')

inputEl.addEventListener('blur',event=>{
    if(event.target.value.length!==Number(inputEl.getAttribute('data-length'))){
        inputEl.classList.add('invalid')
      return
      }
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
      
})

