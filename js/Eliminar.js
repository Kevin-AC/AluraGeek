import { ConexionAPI } from "./ConexionAPI.js";

async function eliminarProducto(id){
    try {
        await ConexionAPI.borrarProducto(id);
        const card = document.querySelector(`[data-id="${id}"]`).closest(".producto");
        card.remove();
        alert("Producto eliminado correctamente");
    
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("click",async(e)=>{
    if (e.target.classList.contains("button_trash")){ 
        const id = e.target.getAttribute("data-id");
        console.log(id);
        await eliminarProducto(id)
    
    }
});