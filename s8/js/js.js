const usuario = $("#txtUsuario");
const valusuario = $("#valusuario");

const nombre = $("#txtNombre");
const valnombre = $("#valnombre");

const contrasena = $("#txtContrasena");
const valcontrasena = $("#valcontrasena");

const repeticion = $("#txtrepeticion");
const valrepeticion = $("#valrepeticion");

const correo = $("#txtcorreo");
const valcorreo = $("#valcorreo");

const celular = $("#txtcelular");
const valcelular = $("#valcelular");

const enviar = $("#btnEnviar");

function Validar(){
    console.log("function validar")
    let iusu = $("#txtUsuario").val();
    let expRegiUsu = new RegExp("^[a-zA-Z0-9_]{4,16}$");
    $("#valusuario").text('');

    let nom = $("#txtNombre").val()
    let expRegNom = new RegExp("^[A-Zña-zñ ]*$");
    $("#valnombre").text('');

    let cont = $("#txtContrasena").val()
    let expRegCont = new RegExp("^[0-9]{8}$");
    $("#valcontrasena").text('');

    let repet = $("#txtrepeticion").val()
    let expRegRepet = new RegExp("^[0-9]{8}$");
    $("valrepeticion").text('');

    let corr = $("#txtcorreo").val()
    let expRegCorr = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    $("#valcorreo").text('');

    let celu = $("#txtcelular").val()
    let expRegCelu = new RegExp("^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$");
    $("#valcelular").text('');

    if(iusu == "" || !expRegiUsu.test(iusu)){
        $("#valusuario").text('El usuario debe tener de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo');
    }
    if(nom == "" || !expRegNom.test(nom)){ 
        $("#valnombre").text("nombre no valido");
    }
    if(cont == "" || !expRegCont.test(cont)){ 
        $("#valcontrasena").text("la contraseña debe contener 8 números");
    }
    if(repet !== cont){
        $("#valrepeticion").text("Las contraseñas deben ser iguales");
    }
    if(corr == "" || !expRegCorr.test(corr)){
        $("#valcorreo").text("Correo no valido");
    }
    if(celu == "" || !expRegCelu.test(celu)){
        $("#valcelular").text("Celular no valido");
    }
}
$("#btnEnviar").click(()=>{
    Validar();
});

// btnEnviar.onclick = () => Validar();