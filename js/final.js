const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');
const calif = document.querySelectorAll('.cali');
const nombres = document.querySelector('#nombres');
let promedios;

nombres.textContent = nombre +' '+ apellido;

let datosJson = new Object();
    datosJson["nom"]= nombre;
    datosJson["ape"]= apellido;

const url = '../php/resultados.php';

const enviar_datos = async() => {
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(datosJson),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    promedios = await resp.json();
    for (let i = 0; i < Object.keys(promedios).length ; i++) {
        calif[i].textContent=parseFloat(await Object.values(promedios)[i]).toFixed(1);
    }
};
enviar_datos();