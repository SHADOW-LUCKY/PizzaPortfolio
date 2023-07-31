import {get,post,del,put} from './APIs.js'
const bordes = document.querySelector("#bordes")
const formbord = document.querySelector("#formbord")

const getbord = async()=>{
    const data = await get('bord')
    data.forEach(element => {
        let plantilla =``
        if(element.available==true){
         plantilla =`
            <div class="col-lg-4 col-md-6 p-2">
                <div class="card bgcard" >
                    <div class="card-header d-flex formradius flex-row justify-content-between">
                        <h5 class="mt-2">${element.name}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle eliminar text-danger" id="${element._id}"></i></button> 
                    </div>
                <img src="${element.imagen}" class="card-img" alt="...">
                    <div class="row p-1">
                        <div class="d-flex flex-row p-2 justify-content-center">
                            <form class="d-flex">
                            <h5 class="mt-2 p-2 titleava" style="color: rgb(11, 145, 40);" name="${element._id}" id="${element.available}">Available<i class="bi bi-check-circle-fill"></i></h5>
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
                    <h5 class="mt-2">${element.name}</h5><button style="font-size: x-large; background-color: rgba(255,255,255,0); border: none "><i class="bi bi-x-circle eliminar text-danger" id="${element._id}"></i></button>  
                    </div>
                <img src="${element.imagen}" class="card-img" alt="..." >
                    <div class="row p-1">
                        <div class="d-flex flex-row p-2 justify-content-center">
                            <form class="d-flex" >
                            <h5 class="mt-2 p-2 titleava" style="color: rgb(167, 24, 24);" name="${element._id}" id="${element.available}">Not Available<i class="bi bi-x-circle-fill "></i></h5>
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

addEventListener("DOMContentLoaded",getbord())
bordes.addEventListener("click",delpost)
bordes.addEventListener("submit",putbordes)
formbord.addEventListener("submit",makebord)
