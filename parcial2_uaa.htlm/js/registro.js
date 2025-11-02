let selects= document.querySelectorAll("select");
let form= document.querySelector("form");

function faltaSelect(){
    for(let select of selects){
        if(select.value==0){
            return true
        }
    }
    return false
}
form.addEventListener("submit",e=>{
    if(faltaSelect()){
        e.preventDefault();
        alert("Debes Seleccionar al menos un curso y una ponencia")
    }
})