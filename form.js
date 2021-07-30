const user = document.querySelector("#text")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const userp = document.querySelector("#userp")
const emailp = document.querySelector("#emailp")
const passp = document.querySelector("#passp")
const btn = document.querySelector("button")

btn.addEventListener('click',show)

function show(e){
    e.preventDefault()
    if(user.value == ''){
        userp.textContent = 'a username is required'
        navigator.vibrate(2000)
            }else if(user.value.length < 5){
                userp.textContent = 'username needs to be of 5 characters or more'
                navigator.vibrate(2000)
            }else{userp.textContent = ' '}

            if(email.value.length < 12){
                emailp.textContent = 'invalid email address'
                navigator.vibrate(2000)
            }else if(email.value.indexOf('@') < 2){
                emailp.textContent = 'inappropriate email address '
                navigator.vibrate(2000)
            }else{emailp.textContent=''}

            if(pass.value.length < 8){
                passp.textContent = 'password needs to be 8 characters or more'
                navigator.vibrate(2000)
            }else{passp.textContent = ''
        }if(user.value.length >= 5 && email.value.length >= 12 && email.value.indexOf('@') >= 2 && pass.value.length >= 8){
            alert('sure to submit..pal..??')

        }

            
}
