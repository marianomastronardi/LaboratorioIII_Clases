<?php

$nombre = $_POST('nombre');
$apellido = $_POST('apellido');

if(empty($nombre) || empty($apellido)){
    echo "Por favor ingrese su nombre y su apellido";
}
else{
    echo "gracias " . $nombre . " " .  $apellido . "|";
}



?>