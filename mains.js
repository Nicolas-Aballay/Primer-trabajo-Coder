
// El Iva de la compra
let IVA = 1.25


// Lista de los vinos
productosVinos= [
    {
        id: 1,
        nombre: "Vino Alaris",
        precio: 10000,
        url: "./imagenes/alaris.png",
        

    },
    {
        id: 2,
        nombre: "Vino El Enemigo",
        precio: 30000,
        url: "./imagenes/el-enemigo-cabernet-franc-2021-vino-el-enemigo-512917.webp",
        
    },
    {
        id: 3,
        nombre: "Vino Trivento",
        precio: 17500,
        url: "./imagenes/trivento-reserve-cabernet-sauvignon-2021-vino-trivento-767257.webp",
       
    },
    {
        id: 4,
        nombre: "Vino New Age",
        precio: 6500,
        url: "./imagenes/VinoNewAge.webp",
        
    },
    {
        id: 5,
        nombre: "Vino Paradigma",
        precio: 10500,
        url: "./imagenes/VinoParadigma.webp",
        
    },
    {
        id: 6,
        nombre: "Vino Buenos Aires",
        precio: 16300,
        url: "./imagenes/VinoBsAs.webp",
        
    },
    {
        id: 7,
        nombre: "Vino Valentini",
        precio: 8500,
        url: "./imagenes/VinoValentini.webp",
       
    },
    {
        id: 8,
        nombre: "Vino D.O.C",
        precio: 7000,
        url: "./imagenes/Vino-Malbec-D-O-C-750-Cc-1-17885.webp",
        
    },
    {
        id: 9,
        nombre: "Vino Reservado ",
        precio: 10000,
        url: "./imagenes/VINO-TINTO-SECO-RESERVADO-CASA-GRAJALES.webp",
       

    },


]



//Esta variable llama UL de productos 
const productos = document.getElementById("vinos")


function renderProduct(productosArrays) {
    productosArrays.forEach((producto) => {
        let contenedor = document.createElement("div")       
        contenedor.innerHTML = `<h4>Producto: ${producto.nombre}</h4>
                            <h4>Precio: $${producto.precio}</h4>
                            <img src=${producto.url} alt="">
                            <button class="productoAgregar" id="${producto.id}">Agregar al Carrito</button>`
        productos.appendChild(contenedor)
    })
    BotonAgregarAlCarrito()
}
renderProduct(productosVinos)


//Funcion Agregar al carrito

function BotonAgregarAlCarrito() {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productoId = e.currentTarget.id
            const ProductoSeleccionado = productosVinos.find(producto => producto.id == productoId)
            carrito.push(ProductoSeleccionado)
            console.log(carrito)

            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}