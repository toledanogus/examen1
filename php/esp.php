<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_erro(mysqli));

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

//Con mysqli_query se hace una petición a la base de datos, ya sea para llamar datos, modificar o insertar datos
mysqli_query($conn, "INSERT INTO examen1 (espP, uno, dos) VALUES ('".$jsonObj->espP."','".$jsonObj->xxx."','".$jsonObj->xxx1."')");
?>
