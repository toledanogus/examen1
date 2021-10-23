let puntaje;
let r;

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
console.log(nombre);
const fun = (e) => {
    let respuestas = [];
    let respuestasCompletas = [];
    for (let a = 1; a < 15; a++) {
        if (document.querySelector(`input[name="${a}"]:checked`) == null) {
            alert('Te faltan preguntas por responder');
            return;
        }
    }
    for (let i = 1; i < 15; i++) {
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
    let promedioesp = (puntaje*10)/14
    console.log(promedioesp);
    if (puntaje==undefined) {
        alert('Ninguna de tus respuestas es correcta ¿Deseas volver a intentarlo?');
    }
    let datosJson = new Object();
    for (let j = 0; j < 14; j++) {
        datosJson["xxx"+j]= respuestasCompletas[j];
    }
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;
    datosJson["espP"]= promedioesp;

    const conti = confirm('¿Deseas registrar tus respuestas y continuar?');
    if (conti==true) {
        request = new XMLHttpRequest();
        request.open("POST", "../php/esp.php", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(datosJson));
        window.location.href='../pags/mate.html'
    }
    else{
        return;
    }
    
    
    
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


