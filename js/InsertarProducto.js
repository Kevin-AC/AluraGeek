;
import { ConexionAPI } from "./ConexionAPI.js";
const formulario = document.getElementById("formulario");

async function insertarProducto(event) {
    event.preventDefault();
    console.log("fornulario enviado"); 
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await ConexionAPI.crearProducto(nombre,precio,imagen);
        alert("Producto insertado correctamente");
        formulario.reset();
    }catch(error){
        alert("Ha ocurrido un error al insertar el producto");
    }

}

formulario.addEventListener("submit", insertarProducto);