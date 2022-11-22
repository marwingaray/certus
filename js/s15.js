const btnE1 = document.getElementById("btnE1");

btnE1.addEventListener('click', function(){

    let nombre = prompt("Ingrese nombre");
    let sueldo = prompt("Ingrese el sueldo")
    let hijos = prompt("Ingrese cantidad de hijos")
    let bonificacion = 0
    let sueldoFinal = 0

    sueldo = parseFloat(sueldo) || 0;
    hijos = parseFloat(hijos) || 0;
    
    if(hijos > 0){
        bonificacion = 0.07
    }
    bonificacion = bonificacion*sueldo;
    sueldoFinal = bonificacion + sueldo

    alert(`El trabajdor ${nombre} percibira ${sueldoFinal} y su bonificacion es: ${bonificacion}`);
})


// ------------- EJERCICIO 2 -----------------------

const btnE2 = document.getElementById("btnE2");

btnE2.addEventListener('click', function(){

    let numero = prompt("Ingrese un numero");
    let p18 = 0.18;
    let resultado = 0;

    numero = parseFloat(numero) || 0;
    
    if(numero > 500){
        resultado = numero * p18;
        alert(`El 18% de  ${numero} es ${resultado} `);
    }else
        alert(`El ${numero} es menor a 500 `);

})



// ------------- EJERCICIO 3 -----------------------

const btnE3 = document.getElementById("btnE3");

btnE3.addEventListener('click', function(){

    let numero = prompt("Ingrese un numero");
    let resultado = 1;

    numero = parseFloat(numero) || 0;
    
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    alert(`El factorial es: ${resultado}`)

})