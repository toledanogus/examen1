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

if ($valor >= 2) {
  echo "Error";
  }
else {
    
    mysqli_query($conn, "UPDATE examen1 SET mateP='".$jsonObj->mateP."', m1='".$jsonObj->xxx0."', m2='".$jsonObj->xxx1."', m3='".$jsonObj->xxx2."', m4='".$jsonObj->xxx3."', m5='".$jsonObj->xxx4."', m6='".$jsonObj->xxx5."', m7='".$jsonObj->xxx6."', m8='".$jsonObj->xxx7."', m9='".$jsonObj->xxx8."', m10='".$jsonObj->xxx9."', m11='".$jsonObj->xxx10."', m12='".$jsonObj->xxx11."' WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
}

?>