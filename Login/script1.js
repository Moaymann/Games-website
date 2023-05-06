const labels = document.querySelectorAll('.form-control label')
let email =document.querySelector('input[type="email"]')
let password=document.querySelector('input[type="password"]')
let btn =document.getElementById('btn')


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

btn.addEventListener('click', function(e){
    e.preventDefault();
let inputs = document.querySelectorAll('input:not([type="submit"])');
let error = false
for (var i = 0; i < inputs.length; i++){
    if(inputs[i].value.length ==0){
        inputs[i].nextElementSibling.innerHTML =`${inputs[i].name} Required`
        error=true
    }else{
        inputs[i].nextElementSibling.innerHTML =``
    }
}

let email_pattern = /^[a-z]{3,8}@(gmail|yahoo)\.com$/

if(email.value.length !=0){
    if(email_pattern.test(email.value)==false){
        email.nextElementSibling.innerHTML = `Email Not Valid`
        error=true
    }else{
        email.nextElementSibling.innerHTML =``
    }
}
let password_pattern = /^[0-9]{3,8}$/
if(password.value.length !=0){
    if(password_pattern.test(password.value)==false){
        password.nextElementSibling.innerHTML = `Password Not Valid`
        error=true
    }else{
        password.nextElementSibling.innerHTML =``
    }
}
if(email.value=='admin@gmail.com' && password.value== 123456){
   
    window.location.href=`http://127.0.0.1:5500/Games%20Temp/ass3.html` 
 }
})