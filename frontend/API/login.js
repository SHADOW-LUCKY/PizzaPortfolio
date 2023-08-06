import {post} from './APIs.js'
const login = document.getElementById('login')

const logpage = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    let log = await post('login',data)
    localStorage.setItem('token',log.token)
    if(log.result === "access granted"){
        window.location.href = "init.html"
    }else{
        alert("Usuario o contraseña incorrectos")
    }
}

login.addEventListener('submit',logpage)