let puntaje;
let r;

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
console.log(nombre);
const fun = (e) => {
    let respuestas = [];
    let respuestasCompletas = [];
    for (let a = 1; a < 6; a++) {
        if (document.querySelector(`input[name="${a}"]:checked`) == null) {
            alert('Te faltan preguntas por responder');
            return;
        }
    }
    for (let i = 1; i < 6; i++) {
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
    let promediofor = (puntaje*10)/5
    console.log(promediofor);
    if (puntaje==undefined) {
        alert('Ninguna de tus respuestas es correcta ¿Deseas volver a intentarlo?');
    }
    let datosJson = new Object();
    for (let j = 0; j < 5; j++) {
        datosJson["xxx"+j]= respuestasCompletas[j];
    }
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;
    datosJson["forP"]= promediofor;

    const conti = confirm('¿Deseas finalizar?\n Si Aceptas, se registrarán todas tus calificaciones y no podrás hacer más cambios.');
    if (conti==true) {
        request = new XMLHttpRequest();
        request.open("POST", "../php/for.php", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(datosJson));
        window.location.href='../pags/final.html'
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
const saludo = document.querySelector('#saludo');
saludo.innerHTML=`${nombre}, lee con atención las preguntas y selecciona la respuesta correcta`;
const boton = document.querySelector('.boton1');
boton.addEventListener('click', fun);

