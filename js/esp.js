
const fun = () => {
    const r1 = document.querySelector('input[name="1"]:checked').value;
    console.log(r1);    
}

const boton = document.querySelector('.boton1');
boton.addEventListener('click', fun);
