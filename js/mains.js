alert("Bienvenido a mi Ecommerse, Aca vendemos productos de entrenamiento")

// Objetos: Los productos del Ecommerse
const barra1 = {
  id: 1,
  pesos: "15kg",
  precio: 150.000,
  medidas: "1.80 metros",
  marca: "sonnos",
}
const barra2 = {
  id: 2,
  pesos: "20kg",
  precio: 180.000,
  medidas: "2.20 metros",
  marca: "sonnos"
}
const remeras1 = {
  id: 1,
  color: "negro",
  precio: 20.000,
  medidas: "M",
  marca: "Adidas"
}
const remeras2 = {
  id: 2,
  color: "blanco",
  precio: 20.000,
  medidas: "M",
  marca: "Adidas"
}
const remeras3 = {
  id: 3,
  color: "amarillo",
  precio: 20.000,
  medidas: "M",
  marca: "Adidas"
}
const cinturonLumbar1 = {
  id: 1,
  precio: 15.000,
  color: "Negro",
  marca: "GoodGrip",
  medidas: "M"
}
const cinturonLumbar2 = {
  id: 2,
  precio: 20.000,
  color: "Celeste",
  marca: "Sonnos",
  medidas: "M"
}
const cinturonLumbar3 = {
  id: 3,
  precio: 25.000,
  color: "Negro",
  marca: "Adidas",
  medidas: "M"
}
const calleras1 = {
  id: 1,
  precio: 8.000,
  marca: "GoodGrip",
  medidas: "M"
}
const calleras2 = {
  id: 2,
  precio: 10.000,
  marca: "Adidas",
  medidas: "M"
}
const colchonetas1 = {
  id: 1,
  precio: 40.000,
  color: "Azul",
  marca: "Sonnos"
}
const discosEleico1 = {
  id: 1,
  precio: 20.000,
  nombre: 'eleico',
  medidas: "2.5KG"
}
const discosEleico2 = {
  id: 2,
  precio: 25.000,
  nombre: 'eleico',
  medidas: "5KG"
}
const discosEleico3 = {
  id: 3,
  precio: 30.000,
  nombre: 'eleico',
  medidas: "10KG"
}

//Arrays
let barras = [barra1,barra2]
const remeras = [remeras1,remeras2,remeras3]
const cinturonLumbar = [cinturonLumbar1,cinturonLumbar2,cinturonLumbar3]
const calleras = [calleras1,calleras2]
const colchonetas = [colchonetas1]
const discos = [discosEleico1,discosEleico2,discosEleico3]

//Carrito
const carrito = []

// Esta funcion sirver para agregar los productos al carrito
const agregarAlCarrito = (array,id) => {
  carrito.push(array.find(prod => prod.id === id))
}


let continuar = true
while (continuar) {
  let menu = parseInt(prompt("Ingrese 1 para ver las Barras, 2 para ver las remeras, 3 para ver los cinturones lumbares, 4 para ver las calleras, 5 para ver las colchonetas , 6 para ver los discos, 7 ver carrito, 8 salir"))
  switch (menu) {
    case 1:  

      let mensaje = "Estos son los pesos de las barras que tenemos "      
      barras.forEach((barra) => { mensaje += `Barras de ${barra.pesos} ` })
      let respuestaBarras = parseInt(prompt(mensaje + 'Elije el producto que quieres comprar: 1,2'))
      
      agregarAlCarrito(barras,respuestaBarras)
      console.log (barras)
      break

    case 2:

    let mensajeRemeras = "Estas son las remeras que tenemos en stock "      
    remeras.forEach((remeras) => { mensajeRemeras += `Remera de ${remeras.color} ` })
    let respuestaRemeras = parseInt(prompt(mensajeRemeras + 'Elije el producto que quieres comprar: 1,2,3'))
    
    agregarAlCarrito(remeras,respuestaRemeras)
    console.log (remeras)
    break

    case 3:
        let mensajeCinturonLumbar = "Estos son los cinturones que tenemos en stock: "      
        cinturonLumbar.forEach((cinturonLumbar) => { mensajeCinturonLumbar += ` Cinturon lumbar de ${cinturonLumbar.marca} ` })
        let respuesastaCinturonLumbar = parseInt(prompt(mensajeCinturonLumbar + 'Elije el producto que quieres comprar: 1,2,3'))
        
        agregarAlCarrito(cinturonLumbar,respuesastaCinturonLumbar)
        console.log (cinturonLumbar)

      break

    case 4:
        let mensajeCalleras = "Estas son las calleras que tenemos en stock "      
        calleras.forEach((calleras) => { mensajeCalleras += `calleras de ${calleras.marca} ` })
        let respuestaCalleras = parseInt(prompt(mensajeCalleras + 'Elije el producto que quieres comprar: 1,2'))
        
        agregarAlCarrito(calleras,respuestaCalleras)
        console.log (calleras)
      break
    case 5:
        let mensajeColchonetas = "Esta es la colchoneta que tenemos en stock "      
        colchonetas.forEach((colchoneta) => { mensajeColchonetas += `Colchoneta de ${colchoneta.color} ` })
        let respuestaColchoneta = parseInt(prompt(mensajeColchonetas + 'Elije el producto que quieres comprar: 1'))
        
        agregarAlCarrito(colchonetas,respuestaColchoneta)
        console.log (colchonetas)

      break
    case 6:
        let mensajeDiscos = "Estas son los discos que tenemos en stock "      
        discos.forEach((discos) => { mensajeDiscos += `discos de ${discos.medidas} ` })
        let respuestaDiscos = parseInt(prompt(mensajeDiscos + 'Elije el producto que quieres comprar: 1,2,3'))
        
        agregarAlCarrito(discos,respuestaDiscos)
        console.log (discos)
      break
    case 7:
       
      console.log("Tu carrito contiene: ")
      console.log(carrito);
      let mensajecarrito = "El total del carrito es: "

      //Esto sirve para calcular el total del carrito
      let total = carrito.reduce((acc,prod) => acc + prod.precio,0) 
      console.log(mensajecarrito += '$' + total)
      break

    case 8:
      continuar = false
      alert("Gracias por comprar con nosotros!")
      break

    default:

      continuar = false
      alert("opcion incorrecta")
      break


  }

 
}
