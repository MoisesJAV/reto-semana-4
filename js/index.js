    const pieDePagina = 'Realizado por Moises Arrieta';


    function calcular() {
        let calcular = 0;
        let estudiante = document.querySelector('#estudiante').value; 
        let username = document.querySelector('#username').value;
        let nota1 = parseInt(document.querySelector('#nota1').value); 
        let nota2 = parseInt(document.querySelector('#nota2').value); 
        let nota3 = parseInt(document.querySelector('#nota3').value);
        let promedio = document.getElementById('promedio'); 
    
        calcular = (nota1 + nota2 + nota3)/3;
        promedio.innerHTML = 'Estudiante, ' + estudiante + ' su promedio es: ' + calcular;
        }

        function calcularPura (n1,n2,n3) {
            return (n1+n2+n3)/3;
        }
        console.log('Su promedio es: ' + calcularPura(18,17,15));

    //Formulario Arrays//
    'use strict';
const documentReady = () => {
  const botonAgregar = document.getElementById('botonAgregar');

  const agregar = (e) => {
    e.preventDefault();
    let pais = document.querySelector('#pais').value;
    let paises = [];
    let contenedorPaises = document.getElementById('contenedorPaises');
    paises.push(pais);
    console.log(paises);
    for (let index = 0; index < paises.length; index++) {
        contenedorPaises.innerHTML += "<li>" + paises[index] + "</li>";
        console.log(paises[index]);

    }
    //   contenedorPaises.innerHTML = paises;
  };
  botonAgregar.addEventListener('click', agregar);
}
document.addEventListener('DOMContentLoaded', documentReady);
    console.log(pieDePagina);