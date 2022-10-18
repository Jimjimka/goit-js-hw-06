const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit',(event)=>{
    
    const emailInputEl =event.target.elements.email.value
    const passwordInputEl=event.target.elements.password.value
    let arr={};
    
    

    if(emailInputEl&&passwordInputEl !==''){
        
       arr[event.target.elements.email.name]=emailInputEl,
       arr[event.target.elements.password.name]=passwordInputEl

       event.target.reset()
    }

    else {alert('Всі поля повинні бути заповненні')};
    
    
    console.log(arr)
    event.preventDefault()
    
})


