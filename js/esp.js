let puntaje;
const fun = (e) => {
    let respuestas = [];
    for (let i = 1; i < 3; i++) {
        respuestas.push(document.querySelector(`input[name="${i}"]:checked`).value);
    }
    console.log(respuestas);
    e.preventDefault();
    const counts = {};
    respuestas.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    puntaje=counts.rc;
    console.log(puntaje);
}


const boton = document.querySelector('.boton1');
boton.addEventListener('click', fun);
