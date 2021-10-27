let puntaje;
let r;

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
console.log(nombre);
const fun = (e) => {
    let respuestas = [];
    let respuestasCompletas = [];
    for (let a = 1; a < 12; a++) {
        if (document.querySelector(`input[name="${a}"]:checked`) == null) {
            alert('Te faltan preguntas por responder');
            return;
        }
    }
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
    let promediohis = (puntaje*10)/11
    console.log(promediohis);
    if (puntaje==undefined) {
        alert('Ninguna de tus respuestas es correcta ¿Deseas volver a intentarlo?');
    }
    let datosJson = new Object();
    for (let j = 0; j < 11; j++) {
        datosJson["xxx"+j]= respuestasCompletas[j];
    }
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;
    datosJson["hisP"]= promediohis;

    const conti = confirm('¿Deseas registrar tus respuestas y continuar?');
    if (conti==true) {
        request = new XMLHttpRequest();
        request.open("POST", "../php/his.php", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(datosJson));
        window.location.href='../pags/geo.html'
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

const inicio = Date.parse(localStorage.getItem('Tiempo'));
let hora2; 
let fff;
const gus=()=>{
    fff=setInterval(myTimer,1000);
}
function myTimer(){
    hora2 = new Date();
    let diff = Math.round((inicio - hora2)/1000, 1);
    diff2=diff;
    let minutes = Math.floor(diff / 60);
    let seconds = diff - minutes * 60;
    seconds<10 ? document.querySelector('#timer').innerHTML=`Tiempo restante: ${minutes}:0${seconds}` : document.querySelector('#timer').innerHTML=`Tiempo restante: ${minutes}:${seconds}`;
    if (diff2<=0){
        let datosJson = new Object();
        datosJson["nom"]= nombre;
        datosJson["ape"]= apellido;
        
        request = new XMLHttpRequest();
        request.open("POST", "../php/fin.php", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(datosJson));
        clearInterval(fff);
        alert('Tiempo agotado');
        window.location.replace("http://www.w3schools.com");
    } 
    };
gus();
