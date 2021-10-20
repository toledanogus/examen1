const recibir = () => {
    let ren = document.querySelector('#nombre').value;
    let rea = document.querySelector('#apellido').value;
    localStorage.setItem('nombre', ren);
    localStorage.setItem('apellido', rea);
    console.log(ren);
};