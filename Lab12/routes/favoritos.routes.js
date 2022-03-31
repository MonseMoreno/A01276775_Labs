
const express = require('express');
const path = require('path');
const router = express.Router();


//VARIABLES 
const videojuegos = [
   {nombre_videojuego: "Diablo III"},
   {nombre_videojuego: "Rainbow Six"},
   {nombre_videojuego: "Black Ops II"},
   {nombre_videojuego: "Lost Ark"},
   {nombre_videojuego: "Stardew Valley"},
   {nombre_videojuego: "Valorant"}
    


];
const personajes = [
    {nombre_personaje: "Mario Bross"},
    {nombre_personaje: "Kratos"},
    {nombre_personaje: "Mega Man"},
    {nombre_personaje: "Jinx"},
    {nombre_personaje: "Sonic"}
    
];

const comentarios = [
    {texto_comentario: "La página es genial!! "},
    {texto_comentario: "Aquí descubro nuevos videojuegos!!"},
    {texto_comentario: "No me gusta, muy aburridos :/"},
    {texto_comentario: "Ya puse los mios, espero les agraden ;"}

];


//RUTA GET DE VIDEOJUEGOS FAVORITOS 
router.get('/VideojuegoFavorito', (request, response, next) => {
    console.log('GET /favoritos/VideojuegoFavorito');
    response.render('VideojuegoFavorito', {nombre_videojuego: " "});
});


router.post('/VideojuegoFavorito', (request, response, next) => {
    console.log('POST /favoritos/VideojuegoFavorito');
    console.log(request.body);
    videojuegos.push({nombre_videojuego: request.body.nombre});
    response.redirect('/favoritos');
});

// router.get('/Personajes', (request, response, next) => {
//     console.log('GET /favoritos/Personajes');
//     let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
//     respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>MIS PERSONAJES FAVORITOS DEL MES!!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/favoritos/Personajes" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Lotus" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
//     response.send(respuesta); 
// });


// router.post('/Personajes', (request, response, next) => {
//     console.log('POST /favoritos/Personajes');
//     let dato = request.body.nombre
//     personajes.push(dato);
    
    
//     console.log(personajes);
//    // console.log(Datos);
//     // console.log('Verificando el string de los videojuegos');
//     // console.log(videojuegos);
//     response.redirect('/favoritos');
//     DatoNuevo('personajes.txt', dato);
    
// });

// router.get('/MiComentario', (request, response, next) => {
//     console.log('GET /favoritos/MiComentario');
//     let respuesta = ' <!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">  <img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" ></img> <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
//     respuesta += ' <div class="Contenido "> <h1><FONT COLOR="purple"><center>MIS COMENTARIOS SOBRE LA PÁGINA!!! </center> </h1></FONT></h1> <h4>Ingresa el tuyo!!</h4></div> <form action="/favoritos/MiComentario" method="POST"> <label for="nombre">Nombre: </label>  <input type="text" id="nombre" name="nombre" placeholder="Me encanta!!" <br><br>  <a href=""><input type ="submit" value="Enviar"></a> </form> <br><br> <a href="/favoritos"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a> </div> </body>  </html> ';
//     response.send(respuesta); 
// });


// router.post('/MiComentario', (request, response, next) => {
//     console.log('POST /favoritos/MiComentario');
//     let dato = request.body.nombre
//     comentarios.push(dato);

//     console.log(comentarios);
//    // console.log(Datos);
//     // console.log('Verificando el string de los videojuegos');
//     // console.log(videojuegos);
//     response.redirect('/favoritos');
//     DatoNuevo('comentarios.txt', dato);
    
// });


router.use('/', (request, response, next) => {
    console.log('Use Ruta /favoritos');
    response.render('Principal', {videojuegos: videojuegos}); 

});



module.exports = router;