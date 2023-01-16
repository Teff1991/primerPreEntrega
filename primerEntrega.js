const nombreDeLaEscuela = prompt ("Ingrese nombre de la escuela")
if (nombreDeLaEscuela == "Escuela Grillito"){
    console.log ("Bienvenidos a la Escuela Grillito")
} else if (nombreDeLaEscuela == "Escuela San Pedro"){
    console.log ("Bienvenidos a la Escuela San Pedro")
} else {
    console.log ("El usuario no es alumno ni de Escuela Grillito, ni de Escuela San Pedro");
}
for (let i = 0; i<5; i++){
const nombreDeUsuario = prompt ("Ingrese su nombre de usuario o e-mail");
const edad = prompt ("Ingrese su edad");
console.log ("El usuario"+"es:"+ usuario + "y su edad es:" + edad);
}
const valorCuotaEscolar = parseInt (prompt("Ingrese nivel educativo"))
switch (valorCuotaEscolar) {
    case "Cuota de nivel inicial":
        console.log ("La cuota de nivel inicial es de 5000 pesos");
        break;
    case "Cuota de nivel primario":
        console.log ("La cuota de nivel primario es de 7500 pesos");
        break;
    case "Cuota de nivel secundario":
        console.log ("La cuota de nivel secundario es de 10000 pesos");
        break;

        default:
            console.log ("Ingreso un nivel educativo desconocido")        
    }
function establecimientoEducativo (){
    const establecimiento = prompt ("Ingrese establecimiento Educativo");
    console.log ("Bienvenido a" + establecimiento);
    }

function nombreDeUsuario (){
    const usuario = prompt ("Ingrese el usuario con el que se registro en la plataforma");
    console.log ("Su usuario es" + usuario);
    }

function cursoAlQueAsiste (){
    const curso = prompt ("Ingrese establecimiento Educativo");
    console.log ("Usted concurre a" + curso)+"año";
    }
