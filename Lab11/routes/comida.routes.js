
const express = require('express');
const router = express.Router();


const fs = require('fs');
const readline = require('readline');

//VARIABLES 
const comida = [];

//Función para leer archivos
function LeerArchivos (txt,array){
    const readInterface = readline.createInterface({
    input: fs.createReadStream(txt),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    array.push(line)
});
}

//Añadir datos nuevos al txt
function  DatoNuevo(txt,dato){
fs.appendFile(txt, dato + "\n", (err) => {
    if (err) throw err;
    console.log(dato + "Ha sido agregado!")
});
}

//Leer los archivos

LeerArchivos('comida.txt',comida);


router.get('/NuevaComida', (request, response, next) => {
    console.log('GET /comida/NuevaComida');
    let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>Mis comidas preferidas!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/comida/NuevaComida" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Arroz" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
    response.send(respuesta); 
});


router.post('/NuevaComida', (request, response, next) => {
    console.log('POST /comida/NuevaComida');
    let dato = request.body.nombre
    comida.push(dato);

    console.log(comida);
   // console.log(Datos);
    // console.log('Verificando el string de los videojuegos');
    // console.log(videojuegos);
    response.redirect('/comida');
    DatoNuevo('comida.txt', dato);
    
});


router.use('/', (request, response, next) => {
    console.log('Use Ruta /comida');
    let respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper ">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" > <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += '<div class="Contenido "> <h1><FONT COLOR="blue"><center> Comidas favoritas! </center> </h1></FONT></h1> <h5>Ingresa el tuyo!!</h5></div>';
    for (let i in comida) {
        respuesta += '<li class="collection-item ">' + comida[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/comida/NuevaComida"><button type="button" class="btn btn-outline-secondary ">Agregar mi comida preferida! </button></a><br><br> ';
    response.send(respuesta); 
});


module.exports = router;