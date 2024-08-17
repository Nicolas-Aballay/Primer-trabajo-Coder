

let si = "si"
let no = "no"
function saludar() {

    console.log(prompt("Hola te gustaria conocer los meses del año? si/no"))
} if (si == "si") {
    alert("Bienvenido/a")
} else (no == "no"); {
    alert("Muchas gracias")
}

saludar()

let mes = parseInt(prompt("Ingrese del 1 al 12 para saber la estacion del año"))
switch (mes) {
    case "12":
        console.log("Diciembre tiene 31 dias y el 21 comienza el verano")
        break;
    case "1":
        console.log("Enero tiene 31 dias y es verano")
        break;
    case "2":
        console.log("Febrero tiene 28 dias y es verano")
        break;
    case "3":
        console.log("Marzo tiene 31 dias y el 21 comienza el otoño")
        break;
    case "4":
        console.log("Abril tiene 30 dias y es otoño")
        break;
    case "5":
        console.log("Mayo tiene 31 dias y es otoño")
        break;
    case "6":
        console.log("Junio tiene 30 dias y el 21 comienza el invierno")
        break;
    case "7":
        console.log("Julio tiene 31 dias y es invierno")
        break;
    case "8":
        console.log("Agosto tiene 31 dias y es invierno")
        break;
    case "9":
        console.log("Septiembre tiene 30 dias y el 21 es el comienzo de la primavera")
        break;
    case "10":
        console.log("Octubre tiene 31 dias y es primavera")
        break;
    case "11":
        console.log("Noviembre tiene 30 dias y es Primavera")
        break;
    default:
        console.log("Ese mes no existe")
        break
}

const confirmacion = prompt("Desea conocer otra estacion del año? (si/no)").toLowerCase()
if (confirmacion == "no") {
    continuar = false
    console.log("Gracias!")
} else (confirmacion == "si"); {
    mes
}
confirmacion()