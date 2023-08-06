import {get,del,put,getid} from './APIs.js'
const ordenes = document.querySelector('#ordenes')
const logout = document.querySelector('#logout')

const getordenes = async () => {
    try {
        let plantilla 
        let button 
        let data = await get('orden')
        data.forEach(async(i) => {
            let id = await getid('user',i.person.uid)
            plantilla =`
            <div class="col-3">
                    <div class="card">
                <div class="card-body bgorder ">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">Orden: ${i.state}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none"><i class="bi bi-x-circle eliminar text-danger" value="${i._id}"></i></button>
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
                <li class="list-group-item"><button class="btn btn-primary upd" value="${i.state}" name="${i._id}" type="submit" >Pasar a la siguiente fase</button></li>
                </ul>
            </div>
            </div>`
            ordenes.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
}
}

const updateord = async (e) => {
    e.preventDefault()
    if(e.target.classList.contains("upd")){
        let state = e.target.value
        let id = e.target.name
        switch (state) {
            case "pending":
                state = "preparing"
                break;
            case "preparing":
                state = "ready"
                break;
            case "ready":
                state = "delivered"
                break;
            default:
                state = "error"
                break;
        }
        let obj = {
            state
        }
        let confir = confirm("pasar a la siguiente fase?")
        if(confir){
            await put('orden', id, obj)
            window.location.reload()
        }
    }
}





const delpost = async(e)=>{
    if(e.target.classList.contains("eliminar")) {
        const idTop = e.target.getAttribute("value");
        console.log(idTop);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
            await del('orden', idTop);
            window.location.reload();
        }
    }
}

const auth = async () => {
    let token = await localStorage.getItem('token')
    if(!token){
      alert("Debes iniciar sesión")
      window.location.href = "index.html"
    }else{
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      let data = await JSON.parse(window.atob(base64));
      let auth = await getid('user',data.uid)
      if(auth.role !="admin"){
        alert("No tienes permiso para realizar esta acción")
        window.location.href = "init.html"
      }
    }   
}

const main = async () => {
    await auth()
    await getordenes()
}

addEventListener('DOMContentLoaded', main)
addEventListener('click', updateord)
ordenes.addEventListener('click', delpost)
logout.addEventListener("click",()=>{
    localStorage.removeItem('token')
    window.location.href = "index.html"
})