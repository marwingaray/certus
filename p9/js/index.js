class Empleado{
    codigo;
    nombre;
    apellido;
    correo;
    cargo = "analista";
    sueldoBruto(){
        let jefe = 5000;
        let analista = 4000;
        let programador = 3000;
        let soporte = 2000;
        let asistente = 1500;

        if (this.cargo == "jefe") {
            return jefe;
        }else if(this.cargo == "analista"){
            return analista;
        }else if(this.cargo == "programador"){
            return programador;
        }else if(this.cargo == "soporte"){
            return soporte;
        }else if(this.cargo == "asistente"){
            return asistente;
        }
    };
    descuento(){
        return 0.125 * this.sueldoBruto();
    }
    sueldoNeto(){
        return this.sueldoBruto() - this.descuento();
    }
}


const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", registrarEmpleado);

function registrarEmpleado(){
    nuevoEmpleado = new Empleado();
    nuevoEmpleado.codigo    = document.querySelector("#codigo").value;
    nuevoEmpleado.nombre    = document.querySelector("#nombres").value;
    nuevoEmpleado.apellido  = document.querySelector("#apellidos").value;
    nuevoEmpleado.correo    = document.querySelector("#correo").value;
    nuevoEmpleado.cargo     = document.querySelector("#cargo").value;

    document.querySelector(".codigo").innerHTML = nuevoEmpleado.codigo.toUpperCase();
    document.querySelector(".nombres").innerHTML = `${nuevoEmpleado.nombre.toUpperCase()} ${nuevoEmpleado.apellido.toUpperCase()} `;
    document.querySelector(".correo").innerHTML = nuevoEmpleado.correo.toLowerCase();
    document.querySelector(".cargo").innerHTML = nuevoEmpleado.cargo.toUpperCase();
    document.querySelector(".bruto").innerHTML = nuevoEmpleado.sueldoBruto().toFixed(2);
    document.querySelector(".descuento").innerHTML = nuevoEmpleado.descuento().toFixed(2);
    document.querySelector(".neto").innerHTML = nuevoEmpleado.sueldoNeto().toFixed(2);
}