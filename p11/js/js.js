let pokemons = [
  {
    id: 1,
    name: "charmander",
    type: "fire",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 2,
    name: "squirtle",
    type: "water",
    base_damage: 9,
    base_hp: 14,
    speed: 26,
  },
  {
    id: 3,
    name: "bulbasaur",
    type: "leaf",
    base_damage: 8,
    base_hp: 16,
    speed: 26,
  },
  {
    id: 4,
    name: "pikachu",
    type: "electric",
    base_damage: 12,
    base_hp: 8,
    speed: 32,
  },
  {
    id: 5,
    name: "pidgey",
    type: "air",
    base_damage: 10,
    base_hp: 10,
    speed: 35,
  },
  {
    id: 6,
    name: "goldeen",
    type: "water",
    base_damage: 9,
    base_hp: 12,
    speed: 32,
  },
  {
    id: 7,
    name: "bellsprout",
    type: "leaf",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 8,
    name: "magnemite",
    type: "electric",
    base_damage: 9,
    base_hp: 14,
    speed: 30,
  },
  {
    id: 9,
    name: "ponyta",
    type: "fire",
    base_damage: 12,
    base_hp: 18,
    speed: 36,
  },
  {
    id: 10,
    name: "evee",
    type: "normal",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
];

//1. Ordernar los pokemons por base_damage de menor a mayor.

function order() {
  return pokemons.sort((a, b) => {
    return a.base_damage - b.base_damage;
  });
}
//console.log(order())

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function orderByProp(prop) {
  if (
    prop == "type" ||
    prop == "base_damage" ||
    prop == "base_hp" ||
    prop == "speed"
  ) {
    if (typeof pokemons[0][prop] === "string") {
      return pokemons.sort((a, b) => {
        return a[prop].localeCompare(b[prop]);
      });
    } else if (typeof pokemons[0][prop] === "number") {
      return pokemons.sort((a, b) => {
        return a[prop] - b[prop];
      });
    } else {
      return "Por favor utiliza un atributo válido";
    }
  }
}
//console.log(orderByProp("type"))

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
function filterByType(value) {
  return pokemons.filter((pokemon) => pokemon.type == value);
}
//console.log(filterByType("water"))

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

let pokemonMaster = {
  id: 0,
  name: "",
  created_date: "",
  pokemon: [],
};

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function getRandom(min = 0, max) {
  let random = Math.random() * (max - min) + min;
  return random.toFixed(0);
}

function addRandomPokemonToMaster() {
  let cantidad = pokemons.length;
  const random = getRandom(0, cantidad-1);
  pokemonMaster.pokemon.push(pokemons[random]);
  return parseFloat(pokemonMaster);
}
//console.log(addRandomPokemonToMaster());
//console.log(pokemonMaster);

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
function addMaxMinDamage() {
  for (let index in pokemons) {
    let min_damage = getRandom(1, 2);
    let max_damage = getRandom(3, 5);
    pokemons[index]["min_damage"] = min_damage;
    pokemons[index]["max_damage"] = max_damage;
  }
  return pokemons;
}
addMaxMinDamage()

//console.log(pokemons);

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

function da_o(pokemon){
	console.log(pokemon.min_damage + "----" + pokemon.max_damage);
	let da_o = parseFloat(pokemon.base_damage) + parseInt(getRandom(+pokemon.min_damage, +pokemon.max_damage));
	return da_o;
}
//console.log(da_o(pokemons[0]))

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
function orderByMaxDamage(obj) {
	return obj.sort((a, b) => {
	  return parseInt(a.base_damage + a.max_damage) - parseInt(b.base_damage + b.max_damage);
	});
}

function addPokemonsToMaster(){
	for (let index = 0; index < 3; index++) {
	addRandomPokemonToMaster()
}
orderByMaxDamage(pokemonMaster.pokemon);
return pokemonMaster;
}


console.log(addPokemonsToMaster());

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
function ul(){
	let ul = document.createElement("ul");
	for (const key in pokemons) {
		const li = document.createElement("li");
    li.innerText = pokemons[key]["name"] + " | " + pokemons[key]["type"];
		ul.append(li);
	}
  document.querySelector(".printUl").append(ul)
}
ul();
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

function createTb(){
  let header = ["id","name", "type", 'base_damage', 'base_hp','speed']
  for (const index in pokemons) {
    let tr = document.createElement("tr");
    for (const key in pokemons[index]) {
      let td = document.createElement("td");
      td.innerText = pokemons[index][key];
      tr.append(td)
    }
    document.querySelector("#tbPokemones>tbody").append(tr);
  }
  
}
createTb()