const URL = "http://localhost:4000/productos";

async function getProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  //console.log(data);
  return data;
}

async function crearProducto(nombre,precio,imagen){
  const response = await fetch(URL,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen:imagen
    })
  })
  const data = await response.json();
  if(!response.ok){
    throw new Error("No se pudo insertar el producto");
  }
  return data;
}

export const ConexionAPI ={
  getProducts,crearProducto
}
