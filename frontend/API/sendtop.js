import {get,post,del} from './APIs.js'
const toppings = document.querySelector('#toppings')
const form = document.querySelector('#formtop')

const getall = async()=>{
const data = await get('top')
data.forEach(element => {
    let plantilla =``
    if(element.available==true){
     plantilla =`
        <div class="col-lg-3 col-md-6 p-2">
            <div class="card bgcard" >
                <div class="card-header d-flex formradius flex-row justify-content-between">
                    <h5 class="mt-2">${element.name}</h5><button id="${element._id}" style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle eliminar text-danger"></i></button> 
                </div>
            <img src="${element.imagen}" class="card-img" alt="...">
                <div class="row p-1">
                    <div class="d-flex flex-row p-2 justify-content-center">
                        <form class="d-flex">
                        <h5 class="mt-2 p-2 titleava" style="color: rgb(11, 145, 40);">Available<i class="bi bi-check-circle-fill"></i></h5>
                        <button class="btn btn-warning mx-2 my-2">Change</button>
                        </form>    
                    </div>                                    
                </div>                            
            </div>
        </div>` 
    }else{
        plantilla =`
        <div class="col-lg-3 col-md-6 p-2">
            <div class="card bgcard" >
                <div class="card-header d-flex formradius flex-row justify-content-between">
                    <h5 class="mt-2">${element.name}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle text-danger"></i></button> 
                </div>
            <img src="${element.imagen}" class="card-img" alt="..." >
                <div class="row p-1">
                    <div class="d-flex flex-row p-2 justify-content-center">
                        <form class="d-flex">
                        <h5 class="mt-2 p-2 titleava" style="color: rgb(167, 24, 24);">Not Available<i class="bi bi-x-circle-fill"></i></h5>
                        <button class="btn btn-warning mx-2 my-2">Change</button>
                        </form>    
                    </div>                                    
                </div>                            
            </div>
        </div>`
    }

toppings.innerHTML += plantilla
});
}
const maketopping = async(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    await post('top',data)
    window.location.reload()
}
const delpost = async(e)=>{
    if (e.target.classList.contains("eliminar")) {
        const idTop = e.target.getAttribute("id");
        console.log(idTop);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
            await  del('top', idTop);  
            window.location.reload();           
        }
    }
}


addEventListener('DOMContentLoaded',getall())
form.addEventListener('submit',maketopping)
toppings.addEventListener('click',delpost)