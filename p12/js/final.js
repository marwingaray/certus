//TRABAJO GRUPAL
// Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
 
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")

const resultado = document.getElementById("root");
let users = [
  {Id: 1, Nombre: "Andres", Apellido: "Pacheco", Edad: 38, Profesión: "Developer", created_at: "2020-12-14T06:25:21.118Z"},
  {id: 2, Nombre: "Andrea", Apellido: "Sánchez", Edad: 25, Profesión: "Profesor", created_at: "2022-04-18T14:14:32.879Z"},
  {id: 3, Nombre: "Julia", Apellido: "Ochoa", Edad: 32, Profesión: "Músico", created_at: "2022-12-14T11:53:38.279Z"},
  {id: 4, Nombre: "Samuel", Apellido: "Martínez", Edad: 29, Profesión: "Programador", created_at: "2022-01-26T03:31:15.202Z"},
  {id: 5, Nombre: "Roberto", Apellido: "Mattos", Edad: 40, Profesión: "Chef", created_at: "2022-07-27T02:06:22.760Z"},
  {id: 6, Nombre: "Mercedes", Apellido: "Sánchez", Edad: 35, Profesión: "Veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]
let usuarioFiltro = [];

var reverse = false;
const sectionUsers = document.createElement("section");
sectionUsers.classList.add("container", "btn","btn-light", "btn-gradient","mt-5");
resultado.append(sectionUsers);

//Tabla
const tablaUsers = document.createElement("table");
tablaUsers.classList.add("table", "table-dark","table-striped");
sectionUsers.append(tablaUsers);
construirTabla();
function construirTabla() {
  tablaUsers.innerHTML = "";
  const thead = document.createElement("thead");
  tablaUsers.append(thead);
  construirEncabezadosUsers();
  construirCuerpoUsers();
}

function construirEncabezadosUsers() {
  const encabezados = document.createElement("thead");
  encabezados.classList.add("thead");
  const tr = document.createElement("tr");
  for (const key in users[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    th.style.cursor = "pointer";
    if (key == "created_at") {
      th.textContent = key;
      th.addEventListener("click", (e) => {
        ordenarPorAtributo(key);
        tablaUsers.innerHTML = "";
        tablaUsers.append(encabezados)
        construirEncabezadosUsers();
        construirCuerpoUsers();
      });
    }
    tr.append(th);
  }
  encabezados.append(tr);
  tablaUsers.append(encabezados);
}
function construirCuerpoUsers() {
  const cuerpo = document.createElement("tbody");
  if (usuarioFiltro.length > 0) {
    for (const index in usuarioFiltro) {
      const tr = document.createElement("tr");
      for (const key in usuarioFiltro[index]) {
        const td = document.createElement("td");
        td.textContent = usuarioFiltro[index][key];
        tr.append(td);
      }
      cuerpo.append(tr);
    }
    tablaUsers.append(cuerpo);
  } else {
    for (const index in users) {
      const tr = document.createElement("tr");
      for (const key in users[index]) {
        const td = document.createElement("td");
        td.textContent = users[index][key];
        tr.append(td);
      }
      cuerpo.append(tr);
    }
    tablaUsers.append(cuerpo);
  }
}

// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.

//Crear nuevo usuario

const sectionCrearUsuario = document.createElement("section");
sectionUsers.append(sectionCrearUsuario);
const btnCrearUsuario = document.createElement("button");
btnCrearUsuario.classList.add("btn","col-12", "btn-outline", "btn-outline-dark","d-grid");
btnCrearUsuario.textContent = "Crear Nuevo Usuario";
sectionCrearUsuario.append(btnCrearUsuario);
btnCrearUsuario.addEventListener("click", () => {
  ingresarUsuario();
  construirTabla();
});

const verificarDatos = (objeto) => {
  let datosFaltantes = [];
  for (const key in objeto) {
    if (key === "id") {
      objeto[key] = users.length + 1;
    }
    if (objeto[key] === "" || objeto[key] === undefined) {
      datosFaltantes.push(key);
    }
  }
  if (datosFaltantes.length > 0) {
    datosFaltantes.forEach((dato) => {
      let datoIngresado = prompt(`Ingrese dato faltante: ${dato}`);
      if (datoIngresado === "") {
        alert("Dato inválido");
      } else {
        objeto[dato] = datoIngresado;
      }
    });
  } else {
    alert("Datos válidos");
  }
};

const ingresarUsuario = () => {
  let nombre = prompt('Nombre: ')
  let apellido = prompt('Apellido: ')
  let edad = prompt('Edad: ')
  let profesion = prompt('Profesión: ')
  let fecha = new Date()
  let usuario = {
    id: users.length + 1,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    profesion: profesion,
    created_at: fecha.toISOString()
  };
  console.log(usuario);
  verificarDatos(usuario);
  users.push(usuario);
  console.log(users);
};


///////-----------------------PARET 3



sectionUsers.append(sectionCrearUsuario);
const btnEdit = document.createElement("button");
btnEdit.innerText = "Modificar registro"
btnEdit.classList.add("btn","col-12", "btn-outline", "btn-outline-dark","d-grid");
btnEdit.type = "button";
btnEdit.onclick = updateInUsers;
sectionCrearUsuario.append(btnEdit);
//root.append(btnEdit)

function updateInUsers(){
    id = prompt("Ingrese id del usuario a modificar");
    if(id == ""){
        alert("No se ingreso el id")
        return false;
    }
    const result = users.find((user) => user.id==id);
    if(typeof result === 'undefined'){
        alert(`El id ${id} no existe`)
        return false;
    }
    users.map(user =>{
        if (user.id == id){
            const keys = Object.keys(user)
            for (let i = 0; i < keys.length; i++) {
                if(keys[i] == "id" || keys[i] == "created_date" || keys[i] == "created_at") 
                    console.log(keys[i])
                else{
                    user[keys[i]] = prompt(`Ingrese ${keys[i]}`)
                }
            }
            user["update_date"] = new Date();
            console.log(user)
        }
    })
    construirTabla();
}



// -----------------------parte 4
const btnDelete= document.createElement("button");
btnDelete.innerText = "Borrar registro"
btnDelete.classList.add("btn","col-12", "btn-outline", "btn-outline-dark","d-grid");
btnDelete.onclick = deleteElement;
sectionCrearUsuario.append(btnDelete);
//document.body.append(btnDelete);

function deleteElement(){
  id = prompt("Ingrese id del registro que desea borrar");
  if(id == ""){
    alert("el id no se encuentra en la lista")
  }else{
    const result = users.find((user) => user.id==id);

    console.log(result);
    let indice = users.indexOf(result);
    users.splice(indice, 1);
    console.log(users);

  }
  construirTabla();
}


/// ---------------------5


function ordenarPorAtributo(atributo) {
    reverse = !reverse;
    users.sort((a, b) => {
      if (reverse) {
        return a[atributo] < b[atributo] ? 1 : -1;
      } else {
        return a[atributo] > b[atributo] ? 1 : -1;
      }
    });
  }
  

  const encabezados = document.querySelectorAll("th");
  encabezados.forEach((encabezado) => {
    encabezado.addEventListener("click", (e) => {
      const atributo = e.target.textContent;
      ordenarPorAtributo(atributo);
      tablaUsers.innerHTML = "";
      tablaUsers.append(encabezados);
      construirEncabezadosUsers();
      construirCuerpoUsers();
    });
  });


// --------------------6-----------------------------

let select = document.createElement("select");

let option1 = document.createElement("option");
let option2 = document.createElement("option");

sectionCrearUsuario.append(select);


function ordenar() {
    const opciones = document.getElementById('seleccionar');
    const valorSeleccionado = opciones.options[opciones.selectedIndex].value;

    if(valorSeleccionado==1){
        const fecha = users.sort((a,b)=> new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        construirTabla();
        // fecha.forEach(function(data){
        //     const lista = document.getElementById('ordenado');
        //     lista.innerHTML +=  '<br>' + '<li>'+data.nombre+' '+data.created_at+'</li>' + '<br>'; 
        // })
    }

    if(valorSeleccionado==2){
        const fecha = users.sort((a,b)=> new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        construirTabla();
        // fecha.forEach(function(data){
        //     const lista = document.getElementById('ordenado2');    
        //     lista.innerHTML += '<li>'+data.nombre+' '+data.created_at+'</li>'+ '<br>';
        // })
    }
}

