    
const btnE1 = document.getElementById("btnE1");

btnE1.addEventListener('click', function(){
    let hombres = parseFloat(prompt("Ingrese cantidad de hombres")) || 0;
    let mujeres = parseFloat(prompt("Ingrese la cantidad de mujeres")) || 0;
    let totalEstudiantes = hombres + mujeres;
    let porcH = 0;
    let porcM = 0;

    porcH = (hombres/totalEstudiantes)*100
    porcM = (mujeres/totalEstudiantes)*100

    alert(`En el salon hay ${totalEstudiantes} estudiantes, de los cuales el ${porcH}% son hombres y el ${porcM}% son mujeres`)
})



const btnE2 = document.getElementById("btnE2");

btnE2.addEventListener('click', function(){
    let inversion = parseFloat(prompt("Ingrese monto a invertir")) || 0;
    
    let avLaMar = inversion*0.35
    let avAbancay = inversion*0.25
    let av28julio= inversion*0.10
    let avAviacion = inversion*0.15
    let avTacna = inversion*0.15

    alert(`
        La avenida La Mar tendra una inversion de ${avLaMar}
        La avenida Abancay tendra una inversion de ${avAbancay}
        La avenida 28 de julio tendra una inversion de ${av28julio}
        La avenida Aviacion tendra una inversion de ${avAviacion}
        La avenida Tacna tendra una inversion de ${avTacna}
        teniendo una inversion total de ${inversion}
    `)
})


const btnE3 = document.getElementById("btnE3");

btnE3.addEventListener('click', function(){
    let cantGenerales = parseFloat(prompt("Ingrese cantidad entradas generales")) || 0;
    let cant65 = parseFloat(prompt("Ingrese cantidad entradas para mayores de 65")) || 0;
    let cantMenorEdad = parseFloat(prompt("Ingrese cantidad entradas generales")) || 0;
    
    let general = 150;
    let adulto = 50;
    let menores = 80;
    let total = (cantGenerales * general) + (cant65 * adulto) + (cantMenorEdad * menores);

    alert(`El total recaudado es de ${total}`)
})