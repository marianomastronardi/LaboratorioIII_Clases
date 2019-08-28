/* function SaludarFromJS() {
    console.log("Hola a todos");
} */

var btnSaludar;
/* document es una referencia al html */

/* Manejador de eventos */
window.addEventListener('load', function(){
    btnSaludar = document.getElementById('btnSaludarJS');

    btnSaludar.addEventListener('click', function(){
        console.log('Hola a todos');
        alert('Hola mundo');
    })
})

/* Flecha gorda: es lo mismo pero sin declarar la function */
/* window.addEventListener('load', ()=>{
    btnSaludarJS = document.getElementById('btnSaludarJS');

    btnSaludarJS.addEventListener('click', ()=>{
        console.log("Hola a todos");
    })
}) */