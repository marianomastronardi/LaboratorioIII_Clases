var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    frm.addEventListener('submit', manejadorSubmit);
}

//e es un evento q contiene el evento q llama al manejador
function manejadorSubmit(e) {
    e.preventDefault();//desactivo el envio de la informacion
    //alert('abortamos el submit');
    let nuevamascota = obtenerMascota(e.target);//envio el formulario
    console.log(nuevamascota);
    mascotas.push(nuevamascota);
    document.getElementById('divTabla').innerHTML = "";
    document.getElementById('divTabla').appendChild(crearTabla(mascotas));
    console.log(mascotas);
}

function obtenerMascota(frm) {
    let nombre;
    let edad;
    let tipo;
    let vacunado;
    let desparasitado;
    let castrado;
    let alimento;
    //recorro todos los controles del form
    for (elemento of frm.elements) { //of me devuelve el value

        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;
            case "edad":
                edad = parseInt(elemento.value);
                break;
            case "tipo":
                if (elemento.checked)
                    tipo = elemento.value;
                break;
            case "castrado":
                castrado = elemento.checked;
                break;
            case "vacunado":
                vacunado = elemento.checked;
                break;
            case "desparasitado":
                desparasitado = elemento.checked;
                break;
            case "alimento":
                alimento = elemento.value;
                break;
        }

        console.log(elemento);//me muestra por consola el elemento con los valores
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento);
    //console.log(frm.elements);
}