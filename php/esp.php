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
    
    mysqli_query($conn, "UPDATE examen1 SET espP='".$jsonObj->espP."', e1='".$jsonObj->xxx0."', e2='".$jsonObj->xxx1."', e3='".$jsonObj->xxx2."', e4='".$jsonObj->xxx3."', e5='".$jsonObj->xxx4."', e6='".$jsonObj->xxx5."', e7='".$jsonObj->xxx6."', e8='".$jsonObj->xxx7."', e9='".$jsonObj->xxx8."', e10='".$jsonObj->xxx9."', e11='".$jsonObj->xxx10."', e12='".$jsonObj->xxx11."', e13='".$jsonObj->xxx12."', e14='".$jsonObj->xxx13."' WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
}

?>
