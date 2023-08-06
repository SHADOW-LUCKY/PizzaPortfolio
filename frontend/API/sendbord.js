import {get,post,del,put,getid} from './APIs.js'
const bordes = document.querySelector("#bordes")
const ordenes = document.querySelector("#ordenes")
const logout = document.querySelector("#logout")
const formbord = document.querySelector("#formbord")
const getbord = async()=>{
    const data = await get('bord')
    data.forEach(i => {
        let plantilla =``
        if(i.available==true){
         plantilla =`
            <div class="col-lg-4 col-md-6 p-2">
                <div class="card bgcard" >
                    <div class="card-header d-flex formradius flex-row justify-content-between">
                        <h5 class="mt-2">${i.name}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle eliminar text-danger" id="${i._id}"></i></button> 
                    </div>
                <img src="${i.imagen}" class="card-img" alt="...">
                    <div class="row p-1">
                        <div class="d-flex flex-row p-2 justify-content-center">
                            <form class="d-flex">
                            <h5 class="mt-2 p-2 titleava" style="color: rgb(11, 145, 40);" name="${i._id}" id="${i.available}">Available<i class="bi bi-check-circle-fill"></i></h5>
                            <button class="btn btn-warning mx-2 my-2 update" type="submit">Change</button>
                            </form>    
                        </div>                                    
                    </div>                            
                </div>
            </div>` 
        }else{
            plantilla =`
            <div class="col-lg-4 col-md-6 p-2">
                <div class="card bgcard" >
                    <div class="card-header d-flex formradius flex-row justify-content-between">
                    <h5 class="mt-2">${i.name}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle eliminar text-danger" id="${i._id}"></i></button>  
                    </div>
                <img src="${i.imagen}" class="card-img" alt="..." >
                    <div class="row p-1">
                        <div class="d-flex flex-row p-2 justify-content-center">
                            <form class="d-flex" >
                            <h5 class="mt-2 p-2 titleava" style="color: rgb(167, 24, 24);" name="${i._id}" id="${i.available}">Not Available<i class="bi bi-x-circle-fill "></i></h5>
                            <button class="btn btn-warning mx-2 my-2 update" type="submit">Change</button>
                            </form>    
                        </div>                                    
                    </div>                            
                </div>
            </div>`
        }
    
        bordes.innerHTML += plantilla
    });
}

const makebord = async(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    await post('bord',data)
    window.location.reload()
}

const delpost = async(e)=>{
    if(e.target.classList.contains("eliminar")) {
        const idTop = e.target.getAttribute("id");
        console.log(idTop);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
            await del('bord', idTop);
            window.location.reload();
        }
    }
}

const putbordes = async(e)=>{
    e.preventDefault()
    let opt
    const obj = e.target.firstChild.nextSibling
    if (obj.getAttribute("id")== "true"){
        opt = false
    }else{
        opt = true
    }
    const submit = {
        available: opt
    }
    await put('bord', obj.getAttribute("name"), submit)
    window.location.reload()
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

const getorders = async()=>{
    const data = await get('orden')
    data.forEach(i => {
        let plantilla =`
        <div class="card " >
          <div class="card-body bgorder" style="border: none;">
            <h5 class="card-title ">Orden De ${i.person.name}</h5>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${i._id}" aria-expanded="false" aria-controls="${i._id}">
                  Detalles
                </button>
              </h2>
              <div id="${i._id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Forma:${i.forma}</li>
                    <li class="list-group-item">Queso base:${i.cheese}</li>
                    <li class="list-group-item">Toppings:${i.toppings.join(', ')}</li>
                    <li class="list-group-item">Salsa base:${i.sauce}</li>
                    <li class="list-group-item">Bordes:${i.borders}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
          <div class="card-body bgorder">
            <a href="ordenes.html" class="card-link">Ir a las Ordenes</a>
          </div>
        </div>`
        ordenes.innerHTML += plantilla
    });
    
}
function main () {
    auth()
    getbord()
    getorders()
}



addEventListener("DOMContentLoaded", main())
bordes.addEventListener("click",delpost)
bordes.addEventListener("submit",putbordes)
formbord.addEventListener("submit",makebord)
logout.addEventListener("click",()=>{
    localStorage.removeItem('token')
    window.location.href = "index.html"
})



