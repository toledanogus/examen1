<?php
$conn = mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_erro(mysqli));
$respuestax = mysqli_query($conn, "SELECT espP FROM examen1 WHERE id = 56");
$row = mysqli_fetch_assoc($respuestax);
//echo $row;
echo json_encode ($row);
?>