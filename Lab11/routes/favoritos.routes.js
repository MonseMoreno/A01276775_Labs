
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



router.get('/VideojuegoFavorito', (request, response, next) => {
    console.log('GET /favoritos/VideojuegoFavorito');
    let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/favoritos/VideojuegoFavorito" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Diablo III" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
    response.send(respuesta); 
});


router.post('/VideojuegoFavorito', (request, response, next) => {
    console.log('POST /favoritos/VideojuegoFavorito');
    let dato = request.body.nombre
    videojuegos.push(dato);
    
    
    console.log(videojuegos);
   // console.log(Datos);
    // console.log('Verificando el string de los videojuegos');
    // console.log(videojuegos);
    response.redirect('/favoritos');
    DatoNuevo('videojuegos.txt', dato);
    
});

router.get('/Personajes', (request, response, next) => {
    console.log('GET /favoritos/Personajes');
    let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>MIS PERSONAJES FAVORITOS DEL MES!!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/favoritos/Personajes" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Lotus" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
    response.send(respuesta); 
});


router.post('/Personajes', (request, response, next) => {
    console.log('POST /favoritos/Personajes');
    let dato = request.body.nombre
    personajes.push(dato);
    
    
    console.log(personajes);
   // console.log(Datos);
    // console.log('Verificando el string de los videojuegos');
    // console.log(videojuegos);
    response.redirect('/favoritos');
    DatoNuevo('personajes.txt', dato);
    
});

router.get('/MiComentario', (request, response, next) => {
    console.log('GET /favoritos/MiComentario');
    let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>MIS COMENTARIOS SOBRE LA PÁGINA!!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/favoritos/MiComentario" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Me encanta!!" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
    response.send(respuesta); 
});


router.post('/MiComentario', (request, response, next) => {
    console.log('POST /favoritos/MiComentario');
    let dato = request.body.nombre
    comentarios.push(dato);

    console.log(comentarios);
   // console.log(Datos);
    // console.log('Verificando el string de los videojuegos');
    // console.log(videojuegos);
    response.redirect('/favoritos');
    DatoNuevo('comentarios.txt', dato);
    
});


router.use('/', (request, response, next) => {
    console.log('Use Ruta /favoritos');
    let respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" > <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += '<div class="Contenido "> <h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1> <h5>Ingresa el tuyo!!</h5></div>';
    for (let i in videojuegos) {
        respuesta += '<li class="collection-item ">' + videojuegos[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/favoritos/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a><br><br> ';
    respuesta += '<div class="Contenido ">  <h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2> <h5>Ingresa el tuyo!!</h5></div> ';

    for (let i in personajes) {
        respuesta += '<li>' + personajes[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/favoritos/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a> <br><br </ul> </div> </h5>';
    respuesta += '<div class="Contenido "> <h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2> <h5>Ingresa el tuyo!!</h5></div> </h5>';
   
    for (let i in comentarios) {
        respuesta +='<li class="collection-item ">' + comentarios[i] + '</li>';
    } 
    respuesta += '</ul> <a href="/favoritos/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a> <br><br> </ul> </div> </h5>  </body> <footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > </footer>  </html>' ;

    
    response.send(respuesta); 
});



module.exports = router;