class Persona{
    constructor(nombre,apellido,edad,profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }
}


let arr2 = [];

function crearPersonasPorUsuario(){

    let acrear = Number(prompt('cuantas personas quieres crear?'));
    if(!isNaN(acrear) && acrear>0){
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

function imprimirArregloFinal(arr3){
    document.write(`<p> contenido total: ${arr3.length} entradas <br><p>`);
        for(let j = 0; j<arr3.length;j++){
            
            document.write(`<p> la persona ${j+1} es: <br> 
                                Nombre: ${arr3[j].nombre} <br>
                                Apellido: ${arr3[j].apellido} <br>
                                Edad: ${arr3[j].edad} <br>
                                Profesion: ${arr3[j].profesion} <br> <br> </p>`);
        }

        console.log("Arreglo introducido por usuario");
        console.log(arr3);
    }

    function regresarBotton(){
        document.body.innerHTML = "";
        document.write(`<h1>Bienvenido al programa para crear usuarios</h1> <br>`);
        document.write(`<button onclick="clickMe()">Haz Click Para gregar Usuarios</button>`)
    }

regresarBotton();
imprimirArregloFinal(arr2);

    
}

function crearPrueba(){
    let arreglDePruba = [2]
    arreglDePruba[0] = new Persona("Miguel","Gomez",33,"ing");
    arreglDePruba[1] = new Persona("Lucia","Betsabe de Gomez",33,"La Mejor Psicologa de la existencia");
    arreglDePruba[2] = new Persona("Amphy","Gomez Perez",7,"Cuidadora");
    console.log("Arreglo de Prueba");
    console.log(arreglDePruba);
}

function agregarBody(){
    document.write(`<h1>Bienvenido al programa para crear usuarios</h1> <br>`);
    document.write(`<button onclick="clickMe()">Haz Click Para Agregar Usuarios</button>`);
}


function clickMe(){
    crearPersonasPorUsuario();
}


agregarBody();
crearPersonasPorUsuario(); // se puede remover este llamado a funcion para iniciar directamente de la pagina web