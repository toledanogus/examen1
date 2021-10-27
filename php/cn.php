<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'toledano_1', 'sfreud1978', 'toledano_pedrueza') or die(mysqli_error($conn));

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
    
    mysqli_query($conn, "UPDATE examen1 SET cnP='".$jsonObj->cnP."', cn1='".$jsonObj->xxx0."', cn2='".$jsonObj->xxx1."', cn3='".$jsonObj->xxx2."', cn4='".$jsonObj->xxx3."', cn5='".$jsonObj->xxx4."', cn6='".$jsonObj->xxx5."', cn7='".$jsonObj->xxx6."', cn8='".$jsonObj->xxx7."', cn9='".$jsonObj->xxx8."', cn10='".$jsonObj->xxx9."', cn11='".$jsonObj->xxx10."', cn12='".$jsonObj->xxx11."', cn13='".$jsonObj->xxx12."', cn14='".$jsonObj->xxx13."' WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
}

?>