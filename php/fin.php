<?php
$conn = mysqli_connect('localhost', 'toledano_1', 'sfreud1978', 'toledano_pedrueza') or die(mysqli_error($conn));

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

mysqli_query($conn, "UPDATE examen1 SET antitrampa=1 WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
?>