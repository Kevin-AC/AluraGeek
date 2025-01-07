import { ConexionAPI } from "./ConexionAPI.js";

const producto = document.getElementById("[data-producto]");

export default function listarProductos(titulo, descripcion, precio) {
    const card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `<img src="" alt="">
                        <h3>${titulo}</h3>
                        <img src="${imagen}"  alt="imagen producto"></img>
                        <p>${descripcion}</p>
                        <p>${precio}</p>
                        <button class="button_trash"></button>`;
    return card;

    }