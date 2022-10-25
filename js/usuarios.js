typeof window == 'object' ? console.log('se cargo el DOM') : console.log('no se ha podido cargar el DOM')

class Persona{
    constructor(nombre,apellido,edad,profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }
}

let divLista = document.getElementById('usuariosLista');
let arr2 = JSON.parse(sessionStorage.getItem('arreglo')) || [];
let arrUs = [];
// const bottonSubmit = document.getElementById('submitU');
// bottonSubmit.addEventListener('click',agregarUsuarioForm(arr2));

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
    // divLista.innerHTML += `<h1>Bienvenido al programa para crear usuarios</h1> <br>`
    // divLista.innerHTML += `<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`
    // divLista.innerHTML += `<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br> <br>`
    divLista.innerHTML += `<button onclick="createTable('usuarios',arr2)">Haz Click Para Buscar Ver La Lista</button> <br> <br>`
    divLista.innerHTML += `<button onclick="removeSessionStorage()">Haz Click Para eliminar el arreglo en session storage</button> <br>`
}

function deleteUsuario(ind){
    arr2.splice(ind,1)
    sessionStorage.setItem("arreglo",JSON.stringify(arr2))
    createTable('usuarios',arr2)

}

const createTable = (clase, arr) => {
    
    console.log('Holaaaa')

    let insertTableDom = document.getElementById('dataInfoTable');
    
    let tableTitleCreateH3 = document.createElement('h3')
    
    tableTitleCreateH3.setAttribute('id', clase)
    
    console.log(tableTitleCreateH3)
    
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
    console.log('salidaaaaa-->',clase)
    let infoTextTableTitleCreateH3 = document.getElementById(clase)

    
    infoTextTableTitleCreateH3.innerText = `Informacion de ${clase}`
    
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
                <th scope="col">edad</th>
                <th scope="col">Profesion</th>
    </tr>`

    // Insertamos los datos del arreglo a la tabla
    arr.forEach(( element, index ) =>{
        infoTbody.innerHTML+=`<tr>
            <th scope="row">${index}</th>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.edad}</td>
            <td>${element.profesion}</td>
            <td><button class="btn btn-secondary" onclick="deleteUsuario(${index})">borrar </button></td>
        </tr>`
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



agregarBodyDivLista();
// createTable('usuarios',arr2);
// crearPrueba();
// crearPersonasPorUsuario(); // se puede remover este llamado a funcion para iniciar directamente de la pagina we