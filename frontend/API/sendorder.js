import {get,post,del,put} from './APIs.js'
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
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="queso" value="${element.name}">
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
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="salsa" value="${element.name}">
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
                      <h4>${element.name}</h4><input type="checkbox" style="margin-left:5px ;"  name="topping" value="${element.name}">
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
                      <h4>${element.name}</h4><input type="radio" style="margin-left:5px ;" name="borde" value="${element.name}">
                    </div>
                  </div>
                </div>
              `
            }else{
                plantilla =``
            }
            bordes.innerHTML += plantilla
            
        })
        bordes.innerHTML += `<div class="col-12 d-flex justify-content-center">
            <button type="submit" class="btn ">Enviar</button>
          </div>`
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
    data.topping = ordertop
    console.log(data);
}

async function main() {
  await getsalsas()
  await getquesos();
  await gettoppings() 
  await getbordes()
  await check()

};
formulario.addEventListener('submit', postorden)
addEventListener('DOMContentLoaded', main)





