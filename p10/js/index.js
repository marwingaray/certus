class Alumno{
    codigo;
    nombre;
    notas={
        nota1:0,
        nota2:0,
        nota3:0,
        nota4:0
    };
    constructor(codigo, nombre, notas){
        this.codigo = codigo;
        this.nombre = nombre;
        this.notas = notas;
    };
    promedio = () => {
        let promedioNota1 = 0;
        let promedioNota2 = 0;
        let promedioNota3 = 0;
        let promedioNota4 = 0;
        promedioNota1 = this.notas.nota1 * 0.15;
        promedioNota2 = this.notas.nota2 * 0.20;
        promedioNota3 = this.notas.nota3 * 0.25;
        promedioNota4 = this.notas.nota4 * 0.40;

        return promedioNota1 + promedioNota2 + promedioNota3 + promedioNota4;
    };
    condicion = () => {
        let promedio = this.promedio();
        if(promedio >= 12)
            return "Aprobado";
        else
            return "Desaprobado";
    };
    obsequio = () => {
        let promedio = this.promedio();
        if(promedio > 17)
            return `Felicidades, ganaste tu mochila`;
        else
            return `Deberias esforzarte un poco mas`;
    }
}

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", alumno);

function alumno(){

    let codigo    = document.querySelector("#codigo").value;
    let nombre    = document.querySelector("#nombres").value;

    let nota1    = parseFloat(document.querySelector("#nota1").value);
    let nota2    = parseFloat(document.querySelector("#nota2").value);
    let nota3    = parseFloat(document.querySelector("#nota3").value);
    let nota4    = parseFloat(document.querySelector("#nota4").value);

    let alumno1 = new Alumno(codigo,nombre,{"nota1":nota1,"nota2":nota2,"nota3":nota3,"nota4":nota4})
    document.querySelector(".codigo").innerText     = alumno1.codigo.toUpperCase();
    document.querySelector(".nombres").innerText    = alumno1.nombre.toUpperCase();
    document.querySelector(".promedio").innerText   = alumno1.promedio().toFixed(2);
    document.querySelector(".estado").innerText     = alumno1.condicion().toUpperCase();
    document.querySelector(".obsequio").innerText   = alumno1.obsequio().toUpperCase();
}