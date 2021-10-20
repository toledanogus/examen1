let puntaje;
const fun = (e) => {
    let respuestas = [];
    let respuestasCompletas = [];
    for (let i = 1; i < 3; i++) {
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
    let promedioesp = (puntaje*10)/2
    if (puntaje==undefined) {
        alert('Ninguna de tus respuestas es correcta ¿Deseas volver a intentarlo?');
    }
    let datosJson = new Object();
    datosJson["xxx"]= respuestasCompletas[0];
    datosJson["xxx1"]= respuestasCompletas[1];
    datosJson["espP"]= promedioesp;
    request = new XMLHttpRequest();
    request.open("POST", "../php/esp.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(datosJson));

      
   }


const boton = document.querySelector('.boton1');
boton.addEventListener('click', fun);
