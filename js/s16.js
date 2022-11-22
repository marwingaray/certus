// ------------- EJERCICIO 01 --------------------


const btnE1 = document.getElementById("btnE1");

btnE1.addEventListener('click', function(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let operacion = document.getElementById("operacion");
    let resultado = 0;

    if (operacion.value == "sumar") {
        resultado = suma(valor1, valor2);
        alert(`El resultado de la suma es ${resultado}`)
    } else if (operacion.value == "restar") { 
        resultado = resta(valor1, valor2);
        alert(`El resultado de la resta es ${resultado}`)
    }else if (operacion.value == "multiplicar") { 
        resultado = multipli(valor1, valor2);
        alert(`El resultado de la multiplicacion es ${resultado}`)
    }else {
        resultado = expon(valor1, valor2);
        alert(`El resultado de esta operacion es ${resultado}`)
    }
})


    let multipli = function(x,y){
        return x*y
    }
    let expon = function(x,y){
        return Math.pow(x,y)
    }
    let suma = (x,y) => {return x+y}

    let resta = (x,y) => {return x-y}

    
// ------------- EJERCICIO 02 --------------------

const btnE2 = document.getElementById("btnE2");

btnE2.addEventListener('click', function(){
    const grados = parseFloat(document.getElementById("grados").value);
    let resultado = 0;

    resultado = pasaraFarenheit(grados);
    alert(`En el valor ingresado hay  ${resultado} grados Farenheit`)
})

let pasaraFarenheit = (grado) => { return farenheit = (grado * 1.8) + 32; };



// ------------- EJERCICIO 03 --------------------



const btnE3 = document.getElementById("btnE3");

btnE3.addEventListener('click', function(){
    let valor1 = parseFloat(document.getElementById("valor3").value);
    let valor2 = parseFloat(document.getElementById("valor4").value);
    let resultado = 0;


    resultado = sumar(valor1, valor2);
    //alert(`El resultado de la suma es ${resultado}`)
    document.getElementById("resultado").innerHTML = "Respuesta: " +resultado;
})

    let sumar = (x,y) => {return x+y}




    
// ------------- RETO 1 --------------------



const btnR1 = document.getElementById("btnR1");

btnR1.addEventListener('click', function(){
    let robotPeso= 1;
    let munecaPeso= 0.5;
    let costoDelivery = 5;
    let pesoTotalRobot = 0;
    let pesoTotalMuneca = 0;
    let pesoTotal = 0;

    let cantRobot = "";
    let cantMuneca = "";
    let importe = 0;

   //proceso
    cantMuneca = prompt("Ingrese cantidad de nuñecas:");
    cantRobot = prompt("Ingrese cantidad de robots:");

    pesoTotalMuneca = parseInt(cantMuneca)*munecaPeso;
    pesoTotalMuneca = parseInt(cantRobot)*robotPeso;
    pesoTotal = pesoTotalMuneca + pesoTotalRobot;

    if (pesoTotal > 10) {
        costoDelivery = costoDelivery + 1;
    }
    alert(`El costo de delivery es de ${costoDelivery} por ${cantMuneca} muñecas y ${cantRobot} robots`)  
})

    

