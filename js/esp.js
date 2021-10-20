let puntaje;
let r;

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
console.log(nombre);
const fun = (e) => {
    let respuestas = [];
    let respuestasCompletas = [];
    for (let i = 1; i < 12; i++) {
        respuestas.push(document.querySelector(`input[name="${i}"]:checked`).value);
        respuestasCompletas.push(document.querySelector(`input[name="${i}"]:checked`).nextElementSibling.innerText);
    }
    console.log(respuestas); 
    console.log(respuestasCompletas);                                      
    e.preventDefault();
    const counts = {};
    respuestas.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    puntaje=counts.rc;
    console.log(puntaje);
    let promedioesp = (puntaje*10)/11
    console.log(promedioesp);
    if (puntaje==undefined) {
        alert('Ninguna de tus respuestas es correcta ¿Deseas volver a intentarlo?');
    }
    let datosJson = new Object();
    datosJson["xxx"]= respuestasCompletas[0];
    datosJson["xxx1"]= respuestasCompletas[1];
    datosJson["xxx2"]= respuestasCompletas[2];
    datosJson["xxx3"]= respuestasCompletas[3];
    datosJson["xxx4"]= respuestasCompletas[4];
    datosJson["xxx5"]= respuestasCompletas[5];
    datosJson["xxx6"]= respuestasCompletas[6];
    datosJson["xxx7"]= respuestasCompletas[7];
    datosJson["xxx8"]= respuestasCompletas[8];
    datosJson["xxx9"]= respuestasCompletas[9];
    datosJson["xxx10"]= respuestasCompletas[10];
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;
    datosJson["espP"]= promedioesp;
    request = new XMLHttpRequest();
    request.open("POST", "../php/esp.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(datosJson));

    //Leer datos de base de datos
    /*let req = new XMLHttpRequest();
    req.onload = function () {
        r = JSON.parse(req.responseText);
        console.log(r.espP);
    };
    req.open("get", "../php/enviaresp.php", true);
    req.send();*/   
   };


const boton = document.querySelector('.boton1');
boton.addEventListener('click', fun);
