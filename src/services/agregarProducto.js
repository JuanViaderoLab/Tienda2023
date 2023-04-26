export async function registarProductoEnBd(datosEnvio){
    // Esta es la direcccion del back
    const URL="http://localhost:8080/tienda/api/"

    // Confiugrar la petición que vamos a enviar al back
    const PETICION = {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnvio)
    }

    // Configurar el envio de la petición
    let respuesta = await fetch(URL,PETICION)
    let resultado = await respuesta.json()
    console.log(resultado)
}