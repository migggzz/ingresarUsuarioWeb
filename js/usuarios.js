typeof window == 'object' ? console.log('se cargo el DOM') : console.log('no se ha podido cargar el DOM')

class Persona{
    constructor(nombre,apellido,edad,profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }
}

const formUsuarios = document.getElementById('formUsuarios');
const searchBar = document.getElementById('searcher');
let divLista = document.getElementById('usuariosLista');
let arr2 = JSON.parse(sessionStorage.getItem('arreglo')) || [];
let arrUs = [];
let pokemon = document.getElementById('pokemon');
let poke ="";
let resultadoBusqueda = []


function agregarUsuarioForm(arr){
    let arrTemp = []
    let nombreU = document.querySelector('#nombreU')
    let apellidoU = document.getElementById('apellidoU')
    let ocupacionU = document.getElementById('ocupacionU')
    let edadU = document.getElementById('edadU')

    Client = new Persona(nombreU.value, apellidoU.value, ocupacionU.value, edadU.value);
    
    console.log(typeof(nombreU.value), nombreU.value)
    console.log(apellidoU.value)
    console.log(Client)
    arrTemp.push(Client)
    console.log(arr)
    arr = [...arr, ...arrTemp]
    sessionStorage.setItem("arreglo",JSON.stringify(arr))
}

function agregarBodyDivLista(){
    divLista.innerHTML += `<button onclick="removeSessionStorage()">Haz Click Para eliminar el arreglo en session storage</button> <br>`
}

function deleteUsuario(ind){
    arr2.splice(ind,1)
    sessionStorage.setItem("arreglo",JSON.stringify(arr2))
    createTable('usuarios',arr2)

}

function findUsuario(){
    let searchId = document.getElementById('searchId').value
    let nameVal  = document.getElementById('inputSelec').value
    console.log(searchId)
    console.log(nameVal)

    switch(searchId){
      case "nombre":
        resultadoBusqueda = arr2.filter(function(people){
          return people.nombre== nameVal;
        })
        break;
      case "apellido":
        resultadoBusqueda = arr2.filter(function(people){
          return people.apellido== nameVal;
        })
        break;
      case "profesion":
        resultadoBusqueda = arr2.filter(function(people){
          return people.profesion== nameVal;
        })
        break;
      case "edad":
          resultadoBusqueda = arr2.filter(function(people){
            return people.profesion== nameVal;
          })
          break;
      default: 
          printInitial()
          break;
    }
    if(resultadoBusqueda.length==0){
      alert('no se encontraron busquedas')
      printInitial();
    }
    else{
      console.log(resultadoBusqueda)
      createTable2(searchId,resultadoBusqueda)
      pokemon.innerHTML+=`<button onClick="printInitial()">Regresar a Lista de Usuarios</button>`
    }
}

function addFormUsuarios(){
    formUsuarios.innerHTML ='';
    formUsuarios.innerHTML +=`<form id="agregarUForm">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nombreU">Nombre</label>
        <input type="text" class="form-control" id="nombreU" placeholder="Nombre" required>
      </div>
      <div class="form-group col-md-6">
        <label for="apellidoU">Apellido</label>
        <input type="text" class="form-control" id="apellidoU" placeholder="Apellido" required>
      </div>
    </div>
    <div class="form-group">
      <label for="ocupacionU">Ocupacion</label>
      <input type="text" class="form-control" id="ocupacionU" placeholder="Ingeniero, Pdicologo, Doctor, etc ...." required>
    </div>
      <div class="form-group col-md-2">
        <label for="edadU">Edad</label>
        <input type="text" class="form-control" id="edadU" required>
      </div>
    </div>
    </div>
    <button type="submit" onclick="agregarUsuarioForm(arr2)" class="btn btn-primary" id="submitU">Agregar Usuario</button>
  </form>`;
}

function returnFetch(poke){
  return String(poke)
}

function fetchPokemon(id,name) {
  let pokeid = document.getElementById(`poke${id}`)
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      poke = data.sprites.front_default;
      pokemon.innerHTML += `<img src=${poke} class=" bg-primary text-white"><--${name}</img>`;
      console.log(pokeid);
      pokeid.innerHTML += `<img src=${poke}>`;
    })
    .catch(function(){console.log("error")})
    
}

const fetchPokemon2 = async(index,name)=>{
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    if(!response.ok){
        console.log('no se cargo la info')
        throw new Error(`HTTP error status: ${response.status}`)
    }
    const data = await response.json()
    poke= data.sprites.front_default;
    pokemon.innerHTML += `<img src=${poke} class=" bg-primary text-white"><--${name}</img>`;

}catch(error){
    alert(error)
}
}

const fetchPokemon3 = async(index,name)=>{
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    if(!response.ok){
        console.log('no se cargo la info')
        throw new Error(`HTTP error status: ${response.status}`)
    }
    const data = await response.json()
    poke= data.sprites.front_default;
    pokemon.innerHTML = `<button onClick="printInitial()">Regresar a Lista de Usuarios</button>`;

}catch(error){
    alert(error)
}
}

const createTable = (clase, arr) => {
    

    let insertTableDom = document.getElementById('dataInfoTable');
    
    let tableTitleCreateH3 = document.createElement('h3')
    
    tableTitleCreateH3.setAttribute('id', clase)
    
    
    //// creamos table
    
    let createTable = document.createElement('table');
    
    let createTableHead = document.createElement('thead');
    
    let createTableBody = document.createElement('tbody');
    
    //// pasar atributos
    
    createTable.setAttribute('class', 'table ' + clase + ' mb-5')
    
    createTableHead.setAttribute('class', clase)
    
    createTableBody.setAttribute('class', clase)

    /////////borrar informacion previamente guardada
    insertTableDom.innerHTML = "";
    createTable.innerHTML = "";
    createTableHead.innerHTML = "";
    createTableBody.innerHTML = "";
    
    //// insertamos la tabla
    
    insertTableDom.append(createTable);
    
    //// tomar la clase padre
    
    let nodeParentTable = document.querySelector(`.${clase}`)
 
    nodeParentTable.after(tableTitleCreateH3);
    
    let infoTextTableTitleCreateH3 = document.getElementById(clase)

    
    infoTextTableTitleCreateH3.innerText = `Representacion de Poke por cada Usuario`
    
   // Creamos la etiqueta p
    let infoTable = document.createElement('p')
    // Insertamos la informacion dentro de p
    infoTable.innerHTML = `<b>Lista de ${clase}</b>`
    // Insertamos la informacion de bajada despues del titulo
    createTable.before(infoTable);

    // Juntamos las variables del encabezado de la tabla y el cuerpo de la tabla en un array
    let groupTable = [ createTableHead, createTableBody ]
    groupTable.forEach((element,index)=>{
        element.setAttribute('class', `${clase}-${index}`);
        // insertamos los elementos en el DOM con append
        nodeParentTable.append( element );
    })

    // seleccionamos el encabezado y el cuerpo de la tabla
    let infoThead = document.querySelector(`.${clase}-0`)
    let infoTbody = document.querySelector(`.${clase}-1`)

    // Insertamos los nombres de las columnas
    infoThead.innerHTML = `<tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Profesion</th>
                <th scope="col">Edad</th>
    </tr>`

    // Insertamos los datos del arreglo a la tabla
    arr.forEach(( element, index ) =>{
      // fetchPokemon(index+1);
      infoTbody.innerHTML+=`<tr>
            <th scope="row">${index}</th>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.edad}</td>
            <td>${element.profesion}</td>
            <td><button class="btn btn-secondary" onclick="deleteUsuario(${index})">borrar </button></td>
        </tr>`
        fetchPokemon2(index+1,element.nombre)
    })
    
    }
const createTable2 = (clase, arr) => {
    

      let insertTableDom = document.getElementById('dataInfoTable');
      
      let tableTitleCreateH3 = document.createElement('h3')
      
      tableTitleCreateH3.setAttribute('id', clase)
      
      
      //// creamos table
      
      let createTable = document.createElement('table');
      
      let createTableHead = document.createElement('thead');
      
      let createTableBody = document.createElement('tbody');
      
      //// pasar atributos
      
      createTable.setAttribute('class', 'table ' + clase + ' mb-5')
      
      createTableHead.setAttribute('class', clase)
      
      createTableBody.setAttribute('class', clase)
  
      /////////borrar informacion previamente guardada
      insertTableDom.innerHTML = "";
      createTable.innerHTML = "";
      createTableHead.innerHTML = "";
      createTableBody.innerHTML = "";
      
      //// insertamos la tabla
      
      insertTableDom.append(createTable);
      
      //// tomar la clase padre
      
      let nodeParentTable = document.querySelector(`.${clase}`)
   
      nodeParentTable.after(tableTitleCreateH3);
      
      let infoTextTableTitleCreateH3 = document.getElementById(clase)
  
      
      infoTextTableTitleCreateH3.innerText = ``
      
     // Creamos la etiqueta p
      let infoTable = document.createElement('p')
      // Insertamos la informacion dentro de p
      infoTable.innerHTML = `<b>Lista de Resultados</b>`
      // Insertamos la informacion de bajada despues del titulo
      createTable.before(infoTable);
  
      // Juntamos las variables del encabezado de la tabla y el cuerpo de la tabla en un array
      let groupTable = [ createTableHead, createTableBody ]
      groupTable.forEach((element,index)=>{
          element.setAttribute('class', `${clase}-${index}`);
          // insertamos los elementos en el DOM con append
          nodeParentTable.append( element );
      })
  
      // seleccionamos el encabezado y el cuerpo de la tabla
      let infoThead = document.querySelector(`.${clase}-0`)
      let infoTbody = document.querySelector(`.${clase}-1`)
  
      // Insertamos los nombres de las columnas
      infoThead.innerHTML = `<tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Profesion</th>
                  <th scope="col">Edad</th>
      </tr>`
  
      // Insertamos los datos del arreglo a la tabla
      arr.forEach(( element, index ) =>{
        // fetchPokemon(index+1);
        infoTbody.innerHTML+=`<tr>
              <th scope="row">${index}</th>
              <td>${element.nombre}</td>
              <td>${element.apellido}</td>
              <td>${element.edad}</td>
              <td>${element.profesion}</td>
              <td><button class="btn btn-secondary" onclick="deleteUsuario(${index})">borrar </button></td>
          </tr>`
          fetchPokemon3(index+1,element.nombre)
      })
      
      }

function clickMe(){
    agregarUsuarioForm(arr2);
}


function removeLocalStorage(){
    localStorage.removeItem('arreglo')
}

function removeSessionStorage(){
    sessionStorage.removeItem('arreglo')
}

function createSearchBar(){
  searchBar.innerHTML = `<div class="col-auto my-1">
<label class="mr-sm-2" for="inlineFormCustomSelect">Buscar por...</label>
<select class="custom-select mr-sm-2" id="searchId">
  <option value="nombre">nombre</option>
  <option value="apellido">apellido</option>
  <option value="profesion">ocupacion</option>
</select>
</div>
<div class="form-group mx-sm-3 mb-2">
    <input type="text" class="form-control" id="inputSelec" placeholder="Bucar">
    <button onClick="findUsuario()">Buscar</button>
  </div>`
}

function printInitial(){
  pokemon.innerHTML='';
  addFormUsuarios();
  createTable("usuarios",arr2);
  createSearchBar();
}


printInitial()
