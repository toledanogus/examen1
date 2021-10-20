<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_error($conn));

$nombre = $_POST['nombre'];
$apellidos =$_POST['apellido'];

//Con mysqli_query se hace una petición a la base de datos, ya sea para llamar datos, modificar o insertar datos
mysqli_query($conn, "INSERT INTO examen1 (nombre, apellidos) VALUES ('$nombre', '$apellidos')");
header('Location: ../pags/esp.html');
exit;
?>