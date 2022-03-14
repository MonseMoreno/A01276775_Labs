
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


//RUTAS
const rutas_favoritos = require('./routes/favoritos.routes');
const rutas_comida = require('./routes/comida.routes');


app.use('/favoritos', rutas_favoritos);
app.use('/comida', rutas_comida);

app.use((request, response,next) => {
    respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8"/> <title> A01276775_Lab1 </title> </head> <body>   <div id = "Content">  <header> <H2> Laboratorio 11 <br> Express <br> </H2> </header> <hr> <div id = "Datos"> Nombre: Monserrat Karime Moreno Casas <br> Edad: 19 años <br> Matricula : A01276775 <br> Semestre: 4to<br>    Correo electrónico: A01276775@tec.mx<br> </div> <div id = "about"> <a href = http://localhost:3000/favoritos > Página de videojuegos!!! </a>. <a href = http://localhost:3000/comida > Ver animalitos! </a>.  <a href = http://localhost:3000/animalitos > Página de comidas!!! </a>. </div>  </div> <hr> <footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a>  </footer> </div> </body>';
    response.send(respuesta); 
    next();
});


app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página de videojuegos no existe :("); //Manda la respuesta
});


app.listen(3000);


