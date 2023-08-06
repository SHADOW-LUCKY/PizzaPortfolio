import {get,post,del,put, getid} from './APIs.js'
const quesos = document.querySelector('#quesos')
const salsas = document.querySelector('#salsas')
const toppings = document.querySelector('#toppings')
const bordes = document.querySelector('#bordes')
const formulario = document.querySelector('#formulario')
let ordertop = []
/* GETs */
const getquesos = async () => {
    try {
        let plantilla 
        let data = await get('que')
        data.forEach(element => {
            if(element.available==true){
                plantilla =`
                <div class="col-lg-3 col-xl-3 col-sm-12 d-flex flex-column justify-content-center">
                  <div class="d-flex flex-column" >
                    <div class=" d-flex justify-content-center">
                      <img src="${element.imagen}"  width="100px" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-center">
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="cheese" value="${element.name}">
                    </div>
                  </div>
                </div>
              `
            }else{
                plantilla =``
            }
            quesos.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
    }
}
const getsalsas = async () => {
    try {
        let plantilla 
        let data = await get('sal')
        data.forEach(element => {
            if(element.available==true){
                plantilla =`
                <div class="col-lg-3 col-xl-3 col-sm-12 d-flex flex-column justify-content-center">
                  <div class="d-flex flex-column" >
                    <div class=" d-flex justify-content-center">
                      <img src="${element.imagen}"  width="100px" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-center">
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="sauce" value="${element.name}">
                    </div>
                  </div>
                </div>
              `
            }else{
                plantilla =``
            }
            salsas.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
    }
}
const gettoppings = async () => {
    try {
        let plantilla 
        let data = await get('top')
        data.forEach(element => {
            if(element.available==true){
                plantilla =`
                <div class="col-lg-3 col-xl-3 col-sm-12 d-flex flex-column justify-content-center">
                  <div class="d-flex flex-column" >
                    <div class=" d-flex justify-content-center">
                      <img src="${element.imagen}"  width="100px" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-center" id="topp">
                      <h4>${element.name}</h4><input type="checkbox" style="margin-left:5px ;"  name="toppings" value="${element.name}">
                    </div>
                  </div>
                </div>
              `
            }else{
                plantilla =``
            }
            toppings.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
    }
}
const getbordes = async () => {
    try {
        let plantilla 
        let data = await get('bord')
        data.forEach(element => {
            if(element.available==true){
                plantilla =`
                <div class="col-lg-3 col-xl-3 col-sm-12 d-flex flex-column justify-content-center">
                  <div class="d-flex flex-column" >
                    <div class=" d-flex justify-content-center">
                      <img src="${element.imagen}"  width="100px" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-center">
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="borders" value="${element.name}">
                    </div>
                  </div>
                </div>
              `
            }else{
                plantilla =``
            }
            bordes.innerHTML += plantilla
            
        })
       
    } catch (error) {
        console.log(error)
    }
}
/* check out */
const check = () => {
  const checkboxes = document.querySelectorAll('#toppings input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const topping = this.value;

    // Obtener la cantidad de checkboxes marcados
    const marcados = document.querySelectorAll('#toppings input[type="checkbox"]:checked').length;

    if (marcados > 5) {
      // Si se supera el límite de 5 checkboxes marcados, desmarcar el checkbox actual
      this.checked = false;
      alert(`¡Has alcanzado el límite de 5 toppings! No puedes seleccionar más.`);
    } else {
      if (this.checked) {
        ordertop = [...ordertop, topping]; 
        
      } else {
        ordertop = ordertop.filter((item) => item !== topping);
      }
    }
  });
  });
}
/* submit */
const postorden = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    let name= data.person

    data.person = {
        name,
        uid: await token()
    }

    data.toppings = ordertop
    if(!data.address || !data.borders || !data.person || !data.sauce || !data.toppings || !data.cheese || !data.forma){
        alert("Todos los campos son obligatorios")
    }else{
      alert("Orden creada")
      await post('orden',data)
      window.location.reload()
    }
    
}

const token = async () => {
  let token = await localStorage.getItem('token')
  if(!token){
    alert("Debes iniciar sesión")
    window.location.href = "login.html"
  }else{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let data = await JSON.parse(window.atob(base64));
    return data.uid
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
    return auth
  }   
}

async function main() {
  await auth()
  await getsalsas()
  await getquesos();
  await gettoppings() 
  await getbordes()
  await check()
};
formulario.addEventListener('submit', postorden)
addEventListener('DOMContentLoaded', main)





