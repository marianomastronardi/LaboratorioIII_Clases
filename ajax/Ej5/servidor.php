<?php

$nombre = $_GET['nombre'];
$apellido = $_GET['apellido'];

if(empty($nombre) || empty($apellido)){
    echo "Por favor ingrese su nombre y su apellido";
}
else{
    echo "gracias " . $nombre . " " .  $apellido . "|";
}



?>