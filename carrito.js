// Carrito 
const carrito = []

 
    
    
//Actualiza totales del carrito

const actualizaTotalesCarrito = (carrito) => {
    const totalProductos = document.querySelector("unidades-productos");
    const totalItems = document.querySelector("unidades-items");
    const totalImporte = document.querySelector("importe-total");
    //Items y Total del subtotal del carrito de compras
    const totalItemsSubTotalCarrito = document.querySelector("modal-subtotal-carrito-2");
    const totalImporteSubTotalCarrito = document.querySelector("modal-subtotal-carrito-3");
    const totalProductosSubTotalCarrito = document.querySelector("modal-subtotal-carrito-1");

    //obtiene la totalidad de productos y lo asigna al elemento correspondiente
    totalProductos.textContent = carrito.length;
    totalProductosSubTotalCarrito.textContent = `Total Productos: ( ${carrito.length} )`;

    //obtiene la totalidad de los items
    const totalItemsCarrito = carrito.reduce((totalAcum, valorActual) => {
        return totalAcum + valorActual.getCantidad();
    }, 0);
    totalItems.textContent = totalItemsCarrito;
    actualizaTotalesCarrito(totalItemsCarrito); //actualiza el contador del carrito
    totalItemsSubTotalCarrito.textContent = totalItemsCarrito; //total items del subtotal del carrito de compras
    
    //obtiene importe total del carrito
    const totalImporteCarrito = carrito.reduce((totalAcum, valorActual) => {
        return totalAcum + (valorActual.getCantidad() * valorActual.getPrecio());
    }, 0);
    totalFinalCarrito = totalImporteCarrito;
    totalImporte.textContent = '$ ' + totalImporteCarrito.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    totalImporteSubTotalCarrito.textContent = '$ ' + totalImporteCarrito.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //total importe del subtotal del carrito
};


// Guardar en el localStorage
let cartStorage = localStorage.getItem("carrito")
cartStorage = JSON.parse(cartStorage)
let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                           <h4>${producto.precio}</h3>`
        cartContainer.appendChild(card)
    })
}
renderCarrito(cartStorage)