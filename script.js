/* var x = function(){
    return 4 + 3
}; */

/* function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        return "hola me llamo " + this.nombre;
    }
}

var p1 = new Persona("jose", "perez", 30);
console.log(p1.saludar());
var p2 = new Persona("ana", "fernandez", 30);
console.log(p2.saludar());

Persona.prototype.altura = 1.50;
p1.altura = 1.80;
console.log(p1.altura);
console.log(p2.altura); */
/* llamo a la funcion q sta en x */
//x();

//console.log(typeof y);
/* node script para simular el console.log en la terminal*/

var x;

function foo(a, b, c){
    //console.log(a, b, c);
    if(!c)
    {
        c = 10;
    }
    //console.log(arguments);
    console.log(a, b, c);
}
x = foo;

x(23,12, 13);//llamo a la funcion foo