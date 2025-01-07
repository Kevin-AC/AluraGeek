const URL = "http://localhost:4000/productos";

async function getProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  //console.log(data);
  return data;
}


export const ConexionAPI ={
  getProducts
}
