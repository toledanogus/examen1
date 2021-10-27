<?php
$conn = mysqli_connect('localhost', 'toledano_1', 'sfreud1978', 'toledano_pedrueza') or die(mysqli_error($conn));

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

$respuestax = mysqli_query($conn, "SELECT espP, mateP, cnP, hisP, geoP, forP FROM examen1 WHERE nombre= '".$jsonObj->nom."' AND apellidos= '".$jsonObj->ape."'");
$row = mysqli_fetch_assoc($respuestax);
//echo $row;
echo json_encode ($row);
?>