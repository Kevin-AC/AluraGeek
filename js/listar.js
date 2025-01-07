import { ConexionAPI } from "./ConexionAPI.js";

const contenedorProductos = document.getElementById("productos");

export default function crearCard(nombre, precio,imagen) {
    const card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `
                        <div class="producto__imagen"><img src="${imagen}"  alt="imagen producto"></img></div>
                        <h3>${nombre}</h3>
                        <div class= "producto__precio">
                            <p>$${precio}</p>
                            <button class="button_trash"></button>                       
                        </div>` 
    return card;

    }

async function listarProductos() {
    const productos = await ConexionAPI.getProducts();
    //console.log(productos)
    productos.forEach(producto => {
        const card = crearCard(producto.nombre,producto.precio,producto.imagen);
        contenedorProductos.appendChild(card);
    });
    
}
listarProductos();