var btnSaludar;
/* document es una referencia al html */

/* Manejador de eventos */
/* cuando se carga la pagina, se dispara el evento load y puedo instanciar el boton*/
/********** addEventListener ***********/
/* 1er Parametro: el evento del control */
/* 2do Parametro: funcion que se ejecuta */
window.addEventListener('load', function(){
    btnSaludar = document.getElementById('btnSaludarJS');

    /* Opcion 1 */
     btnSaludar.addEventListener('click', function(){
        console.log('Hola a todos');
        alert('Hola mundo');
    }) 

    /* Opcion 2 - Descomentar la funcion */
    /* btnSaludar.addEventListener('click', SaludarFromJS); */
})

/*  function SaludarFromJS() {
    console.log("Hola a todos");
}  */

/* Flecha gorda: es lo mismo pero sin declarar la function */
/* window.addEventListener('load', ()=>{
    btnSaludarJS = document.getElementById('btnSaludarJS');

    btnSaludarJS.addEventListener('click', ()=>{
        console.log("Hola a todos");
    })
}) */