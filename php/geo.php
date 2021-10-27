<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_error($conn));

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

//Con mysqli_query se hace una petición a la base de datos, ya sea para llamar datos, modificar o insertar datos
//mysqli_query($conn, "INSERT INTO examen1 (espP, uno, dos, tres) VALUES ('".$jsonObj->espP."','".$jsonObj->xxx."','".$jsonObj->xxx1."', '".$jsonObj->xxx2."')");
$verificar = mysqli_query($conn, "SELECT * FROM examen1 WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
$row = mysqli_fetch_array($verificar);
$valor = $row['antitrampa'];

if ($valor >= 1) {
  echo "Error";
  }
else {
    
    mysqli_query($conn, "UPDATE examen1 SET geoP='".$jsonObj->geoP."', ge1='".$jsonObj->xxx0."', ge2='".$jsonObj->xxx1."', ge3='".$jsonObj->xxx2."', ge4='".$jsonObj->xxx3."', ge5='".$jsonObj->xxx4."', ge6='".$jsonObj->xxx5."', ge7='".$jsonObj->xxx6."', ge8='".$jsonObj->xxx7."', ge9='".$jsonObj->xxx8."' WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
}

?>