<?php
$conn = mysqli_connect('localhost', 'toledano_1', 'sfreud1978', 'toledano_pedrueza') or die(mysqli_error($conn));
$respuestax = mysqli_query($conn, "SELECT espP FROM examen1 WHERE id = 56");
$row = mysqli_fetch_assoc($respuestax);
//echo $row;
echo json_encode ($row);
?>