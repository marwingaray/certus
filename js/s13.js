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