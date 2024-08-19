
alert("Hola Mi nombre es Nicolas Aballay, Bienvenido!!!")
let si = "si"
let no = "no"
function saludar() {

    console.log = prompt(("Hola te gustaria conocer los meses del año? si/no")).toLowerCase
} if (si == "si") {

} else if (no == "no") {
    alert("Muchas gracias")
}

saludar()

let confirmarDeIngreso = true
while (confirmarDeIngreso) {
    let mes = parseInt(prompt("Ingrese del 1 al 12 para saber la estacion del año"))
    switch (mes) {
        case 12:
            console.log("Diciembre tiene 31 dias y el 21 comienza el verano, te gustaria saber mas de este mes? si/no")
            let confirmacion12 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion12 == "si") {
                console.log("El 25 de diciembre se celebra Navidad")

            } else if (confirmacion12 == "no") {
                confirmarcion12 = false
                alert("Gracias!")
            }
            break;
        case 1:
            console.log("Enero tiene 31 dias y es verano")

            let confirmacion1 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion1 == "si") {
                console.log("El 1 (uno) se celebra año nuevo ")

            } else if (confirmar == "no") {
                confirmacion1 = false
                alert("Gracias!")
            }
            break;
        case 2:
            console.log("Febrero tiene 28 dias y es verano")
            let confirmacion2 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion2 == "si") {
                console.log("El 12 y 13 de Febrero en Argetina se celebra Carnaval ")

            } else if (confirmacion2 == "no") {
                confirmacion2 = false
                alert("Gracias!")
            }
            break;
        case 3:
            console.log("Marzo tiene 31 dias y el 21 comienza el otoño")
            let confirmacion3 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion3 == "si") {
                console.log("El 24 de Marzo se celebra el dia Nacional de la memoria por la Verdad y la Justicia ")

            } else if (confirmacion3 == "no") {
                confirmacion3 = false
                alert("Gracias!")
            }
            break;
        case 4:
            console.log("Abril tiene 30 dias y es otoño")
            let confirmacion4 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion4 == "si") {
                console.log("El 2 de Abril se conmemora el dia del Veterano y los Caidos en la Guerra de Malvinas")

            } else if (confirmacion4 == "no") {
                confirmacion4 = false
                alert("Gracias!")
            }
            break;
        case 5:
            console.log("Mayo tiene 31 dias y es otoño")
            let confirmacion5 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion5 == "si") {
                console.log("El 1 de mayo es el dia del Trabajo" + "El 25 de Mayo es el dia de la Revolucion de Mayo")

            } else if (confirmacion5 == "no") {
                confirmacion5 = false
                alert("Gracias!")
            }
            break;
        case 6:
            console.log("Junio tiene 30 dias y el 21 comienza el invierno")
            let confirmacion6 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion6 == "si") {
                console.log("El 17 de Junio se conmemora el paso a la inmortalidad del General Don Martin de Guemes" + "El 20 se conmemora el Paso a la inmortalidad del General Manuel Belgrano")

            } else if (confirmacion6 == "no") {
                confirmacion6 = false
                alert("Gracias!")
            }
            break;
        case 7:
            console.log("Julio tiene 31 dias y es invierno")
            let confirmacion7 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion7 == "si") {
                console.log("El 9 de Julio se conmemora el Dia de la Independecia en Argentina")

            } else if (confirmacion7 == "no") {
                confirmacion7 = false
                alert("Gracias!")
            }
            break;
        case 8:
            console.log("Agosto tiene 31 dias y es invierno")
            let confirmacion8 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion8 == "si") {
                console.log("El 17 se conmemora el paso a la inmortalidad del General Don Jose de San Martin ")

            } else if (confirmacion8 == "no") {
                confirmacion8 = false
                alert("Gracias!")
            }
            break;
        case 9:
            console.log("Septiembre tiene 30 dias y el 21 es el comienzo de la primavera")
            let confirmacion9 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion9 == "si") {
                console.log("No tiene ningun dia conmemorativo ni feriados")

            } else if (confirmacion9 == "no") {
                confirmacion9 = false
                alert("Gracias!")
            }
            break;
        case 10:
            console.log("Octubre tiene 31 dias y es primavera")
            let confirmacion10 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion10 == "si") {
                console.log("El 11 de Octubre es el dia del perdon" + "El 12 de Octubre es el dia de Diversidad Cultural")


            } else if (confirmacion10 == "no") {
                confirmacion10 = false
                alert("Gracias!")
            }
            break;
        case 11:
            console.log("Noviembre tiene 30 dias y es Primavera")
            let confirmacion11 = prompt("Te gustaria saber mas de este mes? (si/no)").toLowerCase()
            if (confirmacion11 == "si") {
                console.log("El 20 de Noviembre es el dia de Soberania Nacional")

            } else if (confirmacion11 == "no") {
                confirmacion11 = false
                alert("Gracias!")
            }
            break;
        default:
            console.log("Ese mes no existe")
            break
    }

    const continuar = prompt("Desea conocer otra estacion del año? (si/no)").toLowerCase()
    if (continuar == "si") {
        console.log("Volve a elegir otro mes" + mes)


    } else if (continuar == "no") {
        confirmarDeIngreso = false
    }
}
