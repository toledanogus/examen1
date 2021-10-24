const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
let r;
let datosJson = new Object();
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;

    request = new XMLHttpRequest();
    request.open("POST", "../php/resultados.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(datosJson));

//Leer datos de base de datos

    let req = new XMLHttpRequest();
    req.onload = function () {
        r = JSON.parse(request.responseText);
        const calif = document.querySelectorAll('.cali');
        calif[0].textContent=parseFloat(r.espP).toFixed(1);
        calif[1].textContent=parseFloat(r.mateP).toFixed(1);
        calif[2].textContent=parseFloat(r.cnP).toFixed(1);
        calif[3].textContent=parseFloat(r.hisP).toFixed(1);
        calif[4].textContent=parseFloat(r.geoP).toFixed(1);
        calif[5].textContent=parseFloat(r.forP).toFixed(1);
    };
    req.open("get", "../php/resultados.php", true);
    req.send();
const nombres = document.querySelector('#nombres');
nombres.textContent = nombre +' '+ apellido;

