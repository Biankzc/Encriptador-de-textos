//----seleccion---//
const botonEncriptar = document.querySelector(".btn__encriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta__contenedor");
const botonCopiar = document.querySelector(".btn__copiar");
const botonDesencriptar = document.querySelector(".btn__desencriptar");


//boton para encriptar---//
botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " El campo del texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " No debe haber acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " El texto debe ser en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility="inherit";
        contenido.remove();
    }
    
})


// boton de desencriptar----------//

botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " El campo del texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " No debe haber acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background ="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = " El texto debe ser en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility="inherit";
        contenido.remove();
    }
    
})

// boton de Copiar----------//

botonCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})
