import {get,post,del,put} from './APIs.js'
const quesos = document.querySelector('#quesos')
const salsas = document.querySelector('#salsas')

const getquesos = async () => {
    try {
        let plantilla 
        let data = await get('que')
        console.log(data);
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
        console.log(data);
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
            salsas.innerHTML += plantilla
        })
    } catch (error) {
        console.log(error)
    }
}
getsalsas()
getquesos();
/* 

*/