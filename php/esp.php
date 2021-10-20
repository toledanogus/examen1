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
    
    mysqli_query($conn, "UPDATE examen1 SET antitrampa=1, espP='".$jsonObj->espP."', uno='".$jsonObj->xxx."', dos='".$jsonObj->xxx1."', tres='".$jsonObj->xxx2."', cuatro='".$jsonObj->xxx3."', cinco='".$jsonObj->xxx4."', seis='".$jsonObj->xxx5."', siete='".$jsonObj->xxx6."', ocho='".$jsonObj->xxx7."', nueve='".$jsonObj->xxx8."', diez='".$jsonObj->xxx9."', once='".$jsonObj->xxx10."' WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
}

?>
