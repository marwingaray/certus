const btnE1 = document.getElementById('btnE1');
btnE1.addEventListener('click', function(){
    let nota1 = parseFloat(prompt("Ingrese nota 1")) || 0;
    let nota2 = parseFloat(prompt("Ingrese nota 2")) || 0;
    let nota3 = parseFloat(prompt("Ingrese nota 3")) || 0;
    let promedio = 0;

    promedio = (nota1 + nota2 + nota3)/3;
    alert(`El promedio de las notas es: ${promedio}`);
});


// -------------- EJERCICIO 2
const btnE2 = document.getElementById('btnE2');
btnE2.addEventListener('click', function(){
    let sueldo1 = parseFloat(prompt("Ingrese sueldo 1")) || 0;
    let sueldo2 = parseFloat(prompt("Ingrese sueldo 2")) || 0;
    let sueldo3 = parseFloat(prompt("Ingrese sueldo 3")) || 0;

    let aSueldo1 = (sueldo1*0.10)+sueldo1;
    let aSueldo2 = (sueldo2*0.12)+sueldo2;
    let aSueldo3 = (sueldo3*0.15)+sueldo3;
    
    alert(`
        El primer sueldo  es: ${sueldo1} y con el aumento del 10% es ${aSueldo1}
        El segundo sueldo  es: ${sueldo2} y con el aumento del 12% es ${aSueldo2}
        El tercer sueldo  es: ${sueldo3} y con el aumento del 15% es ${aSueldo3}
    `);
});



const btnSumar = document.getElementById('btnSumar');
btnSumar.addEventListener('click', function(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let suma = numero1+numero2;
    let producto = numero1*numero2;
    alert(`La suma es: ${suma} y la multiplicación es: ${producto}`);
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    const numero = parseFloat(document.getElementById('numeroEntero').value);
    let respuesta = numero * 0.2
    alert(`El 20% de: ${numero}  es: ${respuesta}`);
});


const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(){
    const numero = parseFloat(document.getElementById('valorMetros').value);
    let cm = numero * 100;
    let mm = numero * 1000;
    alert(` ${numero} metro(s) tiene: ${cm} centimetros y ${mm} milimetros`);
});


const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function(){
    const altura = parseFloat(document.getElementById('altura').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    
    let rpta = (ancho*altura)/2;
    alert(`El area es: ${rpta}`);
});