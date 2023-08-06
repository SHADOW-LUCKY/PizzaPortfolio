import {post} from "./APIs.js";

const signup = document.getElementById("signup")

const newuser = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if(data.confirm !== data.password){
        alert("Las contraseñas no coinciden introducelas nuevamente")
    }else{
        const {confirm,...rest} = data
        post('user',rest)
        document.location.href = "index.html"
    }
    
}

signup.addEventListener("submit",newuser)

/* {name: asdfa, email: nicordonezausecha@gmail.com, phone: 3004548324, password: 1234, confirm: 1234} */