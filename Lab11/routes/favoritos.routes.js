
const express = require('express');
const router = express.Router();


const fs = require('fs');
const readline = require('readline');

//VARIABLES 
const videojuegos = [];
const personajes = [];
const comentarios = [];

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

LeerArchivos('videojuegos.txt',videojuegos);
LeerArchivos('personajes.txt',personajes);
LeerArchivos('comentarios.txt',comentarios);

router.use('/', (request, response, next) => {
    console.log('Ruta /favoritos');
    let respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" > <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += '<div class="Contenido "> <h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1> <h5>Ingresa el tuyo!!</h5></div>';
    for (let i in videojuegos) {
        respuesta += '<li class="collection-item ">' + videojuegos[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a><br><br> ';
    respuesta += '<div class="Contenido ">  <h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2> <h5>Ingresa el tuyo!!</h5></div> ';

    for (let i in personajes) {
        respuesta += '<li>' +personajes[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a> <br><br </ul> </div> </h5>';
    respuesta += '<div class="Contenido "> <h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2> <h5>Ingresa el tuyo!!</h5></div> </h5>';
   
    for (let i in comentarios) {
        respuesta +='<li class="collection-item ">' + comentarios[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a> <br><br> </ul> </div> </h5>  </body> <footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > </footer>  </html>' ;
    
    response.send(respuesta); 
});











module.exports = router;