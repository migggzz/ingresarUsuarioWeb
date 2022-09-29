class Persona{
    constructor(nombre,apellido,edad,profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }
}

Array.prototype.addByName = function(elec,arrUs2){
    // Make sure the array is empty
    arrUs2.length = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i].nombre === elec){
            arrUs2.push(this[i]);
        }
        else{
           ;
      }
    }
    console.log(arrUs2);
}

Array.prototype.addByApellido = function(elec, arrUs2){
    arrUs2.length = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i].apellido === elec){
            arrUs2.push(this[i]);
        }
        else{
           ;
      }
    }
    console.log(arrUs2);
}

Array.prototype.addByEdad = function(elec, arrUs2){
    arrUs2.length = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i].edad === elec){
            arrUs2.push(this[i]);
        }
        else{
           ;
      }
    }
}

Array.prototype.addByProfesion = function(elec, arrUs2){
    arrUs2.length = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i].profesion === elec){
            arrUs2.push(this[i]);
        }
        else{
           ;
      }
    }
}

let arr2 = [];
let arrUs = [];

function crearPersonasPorUsuario(){

    let acrear = Number(prompt('cuantas personas quieres crear? (maximo 20 a la vez)'));
    if(!isNaN(acrear) && acrear>0 && acrear<21){
        numero = Number(acrear);
        let arr = [numero]

        for(let i = 0; i<numero; i++){
            arr[i]= new Persona(prompt('introduce nombre'),prompt('introduce apellido'),prompt(`introduce edad`),prompt('introduce profesion'));
        }

        arr2 = arr2.concat(arr);
    }
    else{
        ;
    }

    // se deja por si se quiere seguir agregando usuarios sin hacer click en el boton, se eliminara en siguiente version/version final.
    let mensaje = Number(prompt('tecelea 1 o si deseas agregar mas personas, teclea cualquier otra cosa para salir'));
        switch(mensaje){
            case 1: 
                crearPersonasPorUsuario();
            default:
                break;
        }

 imprimirArregloFinal(arr2);

    

regresarBotton();
imprimirArregloFinal(arr2);

    
}

function regresarBotton(){
    document.body.innerHTML = "";
    document.write(`<h1>Bienvenido al programa para crear usuarios</h1> <br>`);
    document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`)
    document.write(`<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br>`);
}

function crearPrueba(){
    let arreglDePruba = [2]
    arreglDePruba[0] = new Persona("Miguel","Gomez",33,"ing");
    arreglDePruba[1] = new Persona("Lucia","Betsabe de Gomez",33,"La Mejor Psicologa de la existencia");
    arreglDePruba[2] = new Persona("Amphy","Gomez Perez",7,"Cuidadora");
    arr2 = arreglDePruba;
    console.log("Arreglo de Prueba");
    console.log(arreglDePruba);
}

function agregarBody(){
    document.write(`<h1>Bienvenido al programa para crear usuarios</h1> <br>`);
    document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`);
    document.write(`<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br> <br>`);
    document.write(`<button onclick="imprimirArregloFinal(arr2)">Haz Click Para Buscar Ver La Lista</button> <br>`);
}

function imprimirArregloFinal(arr3){
    document.body.innerHTML = "";
    document.write(`<p> contenido total: ${arr3.length} entradas <br><p>`);
        for(let j = 0; j<arr3.length;j++){
            
            document.write(`<p> la persona ${j+1} es: <br> 
                                Nombre: ${arr3[j].nombre} <br>
                                Apellido: ${arr3[j].apellido} <br>
                                Edad: ${arr3[j].edad} <br>
                                Profesion: ${arr3[j].profesion} <br> <br> </p>`);
        }
        document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`);
        document.write(`<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br>`);
        console.log("Arreglo introducido por usuario");
        console.log(arr3);
}

function imprimirArregloBusqueda(arr3){
    document.body.innerHTML = "";
    document.write(`<p> Contenido total de la busqueda es: ${arr3.length} entradas <br><p>`);
        for(let j = 0; j<arr3.length;j++){
            
            document.write(`<p> El Resultado ${j+1} es: <br> 
                                Nombre: ${arr3[j].nombre} <br>
                                Apellido: ${arr3[j].apellido} <br>
                                Edad: ${arr3[j].edad} <br>
                                Profesion: ${arr3[j].profesion} <br> <br> </p>`);
        }
        document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`);
        document.write(`<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br> <br>`);
        document.write(`<button onclick="imprimirArregloFinal(arr2)">Haz Click Para Buscar Ver La Lista</button> <br>`);
        console.log("Arreglo introducido por usuario");
        console.log(arr3);
}


function clickMe(){
    crearPersonasPorUsuario();
}

function imprimirUsuario(found){
    document.body.innerHTML = "";
                    document.write(`<p> el usuario es : <br> 
                                    Nombre: ${found.nombre} <br> 
                                    Apellido: ${found.apellido} <br>
                                    Edad: ${found.apellido} <br>
                                    Profesion: ${found.profesion}</p> <br>`);
                    document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button> <br> <br>`);
                    document.write(`<button onclick="buscarUsuario()">Haz Click Para Buscar Usuarios</button> <br><br>`);
                    document.write(`<button onclick="imprimirArregloFinal(arr2)">Haz Click Para Regresar a la Lista</button> <br>`);
}

function buscarUsuario(){
    let eleccion = Number(prompt(`como deseas buscar a el Usuario  1)Nombre  2)Apellido 3)Edad  4)Profesion`));
    switch(eleccion){
        case 1:
            let elec = prompt('nombre del usuario');
            encontrarEleccion(elec,eleccion);
            break;

        case 2:
            let elec2 = prompt('apellido del Usuario');
            encontrarEleccion(elec2,eleccion);
            break;

        case 3:
            let elec3 = Number(prompt('Edad del Usuario'));
            encontrarEleccion(elec3,eleccion);
            break;

        case 4: 
            let eleccionSeleccion4 = prompt('Profesion del Usuario');
            encontrarEleccion(eleccionSeleccion4,eleccion);
            break;

        default:
            // alert('No fue una opcion valida');
    }
}

function encontrarEleccion(elec,tipoElec){
    let tpElec = Number(tipoElec); 
    let temp = '';
    switch(tpElec){
        case 1:
            arr2.addByName(elec,arrUs);
            imprimirArregloBusqueda(arrUs);
            // const found4 = arr2.find(elem => elem.nombre === elec);
            // console.log(found4);
            // console.log(typeof(found4));
            // if(found4){
            //     if(found4.nombre ==  elec){
            //         imprimirUsuario(found4);
            //         arr2.addByName(elec,arrUs);
            //         break;
            //     }
            //     else{
            //         alert("No se Encontro el Usuario");
            //     }
            // }
            // else{
            //     alert("No se encontro el Usuario");
            // }
            break;

        case 2:
            arr2.addByApellido(elec,arrUs);
            imprimirArregloBusqueda(arrUs);
            // const found3 = arr2.find(elem => elem.apellido === elec);
            // console.log(found3);
            // console.log(typeof(found3));
            // if(found3){
            //     if(found3.apellido ==  elec){
            //         imprimirUsuario(found3);
            //         arr2.addByName(elec,arrUs);
            //         break;
            //     }
            //     else{
            //         alert("No se Encontro el Usuario");
            //     }
            // }
            // else{
            //     alert("No se encontro el Usuario");
            // }
            break;

        case 3:
            arr2.addByEdad(elec,arrUs);
            imprimirArregloBusqueda(arrUs);
            // const found2 = arr2.find(elem => elem.edad === elec);
            // console.log(found2);
            // console.log(typeof(found2));
            // if(found2){
            //     if(found2.edad ==  elec){
            //        imprimirUsuario(found2);
            //     }
            //     else{
            //         alert("No se Encontro el Usuario");
            //     }
            // }
            // else{
            //     alert("No se encontro el Usuario");
            // }
            break;
            
        case 4: 
        arr2.addByProfesion(elec,arrUs);
        imprimirArregloBusqueda(arrUs);
        // const found = arr2.find(elem => elem.profesion === elec);
        // console.log(found);
        // console.log(typeof(found));
        // if(found){
        //     if(found.profesion ==  elec){
        //        imprimirUsuario(found);
        //     }
        //     else{
        //         alert("No se Encontro el Usuario");
        //     }
        // }
        // else{
        //     alert("No se encontro el Usuario");
        // }
            break;

        default:
            break;
    }

}
agregarBody();
crearPrueba();
// arr2.addByName('Miguel',arrUs);
// crearPersonasPorUsuario(); // se puede remover este llamado a funcion para iniciar directamente de la pagina we