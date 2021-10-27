<?php
//Conectar a la base de datos
$conn = mysqli_connect('localhost', 'toledano_1', 'sfreud1978', 'toledano_pedrueza') or die(mysqli_error($conn));

$nombre = $_POST['nombre'];
$apellidos =$_POST['apellido'];

//Con mysqli_query se hace una petición a la base de datos, ya sea para llamar datos, modificar o insertar datos
$result = mysqli_query($conn, "SELECT antitrampa FROM examen1 WHERE nombre= '$nombre' AND apellidos= '$apellidos'");
$anti = mysqli_fetch_row($result);
    if (mysqli_num_rows($result)>0 && $anti[0] == 1 ) {
        echo '<script language="javascript">';
        echo 'alert("No puedes realizar el examen dos veces.")';
        echo '</script>';
        echo "<script>window.location.href='../index.html';</script>";
    }
    elseif (mysqli_num_rows($result)>0 && $anti[0] == 0 ) {
        echo '<script language="javascript">';
        echo 'alert("Bienvenido de nuevo.")';
        echo '</script>';
        echo "<script>window.location.href='../pags/esp.html';</script>";
    }
    else{
        mysqli_query($conn, "INSERT INTO examen1 (nombre, apellidos) VALUES ('$nombre', '$apellidos')");
        header('Location: ../pags/esp.html');
    }

exit;
?>