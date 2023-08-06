import {get,getid} from "./APIs.js"
const alterorder = document.querySelector(".alterorder")
const logout = document.querySelector("#logout")

const auth = async () => {
    let token = await localStorage.getItem('token')
    if(!token){
      alert("Debes iniciar sesión")
      window.location.href = "index.html"
    }else{
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      let data = await JSON.parse(window.atob(base64));
      return data.uid
    }   
}

const getordenes = async () => {
    try {
        let plantilla 
        let button 
        let data = await get('orden')
        data.forEach(async(i) => {
            let id = await getid('user',i.person.uid)
            let comp = await auth()
            if(id._id == comp){
                plantilla =`
            <div class="col-4 mt-3">
                    <div class="card">
                <div class="card-body bgorder">
                <div class="d-flex justify-content-between">
                    <h3 class="card-title">Orden:${i.state}</h3>
                </div>
                <p class="card-text">Orden hecha por: ${i.person.name}</p>
                <p class="card-text">telefono:${id.phone}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">toppings: ${i.toppings.join(', ')}</li>
                <li class="list-group-item">queso: ${i.cheese}</li>
                <li class="list-group-item">salsa: ${i.sauce}</li>
                <li class="list-group-item">bordes: ${i.borders}</li>
                <li class="list-group-item">dirección: ${i.address}</li>
            </div>
            </div>`
            }else{
                plantilla =``
            }
            alterorder.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
}
}

const out = async () => {
    confirm("¿Deseas cerrar sesión?")
    if (confirm){
        localStorage.removeItem('token')
        window.location.href = "index.html"
    }
}

addEventListener("DOMContentLoaded",getordenes)
logout.addEventListener("click",out)