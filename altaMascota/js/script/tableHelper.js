function crearTabla(array) {
    var tabla = document.createElement("table");

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse:collapse');
    tabla.setAttribute('width', '700px');

    let cabecera = document.createElement("tr");

    for (atributo in array[0]) {
        let th = document.createElement("th");
        th.textContent = atributo;//agrega texto
        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    for (var i in array) {
        var fila = document.createElement('tr');
        var objeto = array[i];

        for (j in objeto) {
            var celda = document.createElement('td');
            celda.setAttribute('style', 'text-align: center');
            var dato = document.createTextNode(objeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);    
        }
        tabla.appendChild(fila);
    }

    return tabla;
}