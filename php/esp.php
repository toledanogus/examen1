<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_erro(mysqli));

//Importa los datos del html
$uno = $_POST['1'];
$dos = $_POST['2'];

//Acción a ejecutar en la base de datos
$escribe = "INSERT INTO examen1(uno,dos) VALUES('$uno','$dos')";

//Ejecuta la conexión y luego la acción
mysqli_query($conn, $escribe);