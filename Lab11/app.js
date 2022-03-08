
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_favoritos = require('./routes/favoritos.routes');

app.use('/favoritos', rutas_favoritos);

//Middleware
// app.use((request, response, next) => {
//     console.log('Middleware!');
//     next(); //Le permite a la petición avanzar hacia el siguiente middleware
// });

// app.use((request, response, next) => {
//     console.log('Otro middleware!');
//     response.send('¡Hola mundo!'); //Manda la respuesta
// });


app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página de videojuegos no existe :("); //Manda la respuesta
});


app.listen(3000);


