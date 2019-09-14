var btnSubmit;
/* document es una referencia al html */

/* Manejador de eventos */
/* cuando se carga la pagina, se dispara el evento load y puedo instanciar el boton*/
/********** addEventListener ***********/
/* 1er Parametro: el evento del control */
/* 2do Parametro: funcion que se ejecuta */
window.addEventListener('load', function(){
   // btnSaludar = document.getElementById('btnSaludarJS');
   var form = document.forms[0];
   //for = this.document.getElementById
    /* Opcion 1 */
   /*   btnSaludar.addEventListener('click', function(){
        console.log('Hola a todos');
        alert('Hola mundo');
    }) */ 
    form.addEventListener('submit', send);
    /* Opcion 2 - Descomentar la funcion */
    /* btnSaludar.addEventListener('click', SaludarFromJS); */
})

function send(e)
{
    
}

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