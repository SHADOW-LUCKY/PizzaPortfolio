let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
const logout = document.querySelector('#logout')

menu.onclick = () => {
 menu.classList.toggle('fa-times')
 navbar.classList.toggle('active')
}
window.onscroll = () => {
 menu.classList.remove('fa-times')
 navbar.classList.remove('active')
 if (window.scrollY > 60) {
  document.querySelector('#scroll-top').classList.add('active')
 } else {
  document.querySelector('#scroll-top').classList.remove('active')
 }
}
function loader() {
 document.querySelector('.loader-container').classList.add('fade-out')
}
function fadeOut() {
 setInterval(loader, 3000)
}
window.onload = fadeOut()

const out = async () => {
    confirm("Desea cerrar sesion?")
    if (confirm){
        localStorage.removeItem('token')
        window.location.href = "index.html"
    }
}

logout.addEventListener('click', out)