const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
const saludo = document.querySelector('#saludo');
const boton = document.querySelector('.boton1');
const inicio = Date.parse(localStorage.getItem('Tiempo'));
let puntaje;
let r;
let hora2; 
let fff;

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
        const url = '../php/his.php';
        const enviar_datos = async() => {
            const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(datosJson),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        };
        enviar_datos();
        window.location.href='../pags/geo.html'
        }
    else{
        return;
    } 
   };

saludo.innerHTML=`${nombre}, lee con atención las preguntas y selecciona la respuesta correcta`;

boton.addEventListener('click', fun);

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
        
        const url = '../php/fin.php';
        const enviar_datos_fin = async() => {
            const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(datosJson),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        };
        enviar_datos_fin();
        clearInterval(fff);
        alert('Tiempo agotado');
        window.location.href='../pags/final.html'
    } 
    };
gus();