/*
Sigue la demostración del profesor en la sesión de clase.
Utilizando alguno de tus laboratorios anteriores (o si lo prefieres empieza de 0), elabora una aplicación web con las siguientes características:
La aplicación debe poder responder al menos a 3 rutas diferentes, y mandar una respuesta HTTP 404 cuando la ruta no existe.
En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST.
El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor.
*/

const fs = require('fs');
const readline = require('readline');


//Variables
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


const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/'){
        console.log('funciona el node pagina inicial ');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es">');
        response.write('<head>');
        response.write('<meta charset="utf-8" />');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
        response.write('<title> A01276775_Lab10 </title> </head> <body>');
        response.write('<header>');
        response.write('<nav id = "navbar">');
        response.write('<div class="nav-wrapper purple lighten-3"> ');
        response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
        response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
        response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
        response.write('<div class="Contenido ">')
        response.write('<h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1>');
        response.write('<h4>Ingresa el tuyo!!</h4></div>');
       

        response.write('<class = "row">');

        response.write('<ul class="s2 purple lighten-5 ">')
        response.write('<h5>');
        for (let i in videojuegos) {
            response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
        } 
        response.write('</ul>');
        response.write('<a href="/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a>');
        response.write('<br><br>');

        response.write('<div class="Contenido ">')
        response.write('<h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2>');
        response.write('<h5>Ingresa el tuyo!!</h5></div>');

        response.write('<class = "row">');

        response.write('<ul class="s2 purple lighten-5 ">')
        response.write('<h5>');
        for (let i in personajes) {
            response.write('<li class="collection-item ">' +personajes[i] + '</li>');
        } 
        response.write('</ul>');
        response.write('<a href="/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a>');
        response.write('<br><br>');
       
   
        response.write('</ul> </div> </h5> ');


        response.write('<div class="Contenido ">')
        response.write('<h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2>');
        response.write('<h5>Ingresa el tuyo!!</h5></div>');

        response.write('<class = "row">');

        response.write('<ul class="s2 purple lighten-5 ">')
        response.write('<h5>');

        for (let i in comentarios) {
            response.write('<li class="collection-item ">' + comentarios[i] + '</li>');
        } 
        response.write('</ul>');
        response.write('<a href="/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a>');
        response.write('<br><br>');
       
   
        response.write('</ul> </div> </h5> ');



        response.write('<footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a> <br>  FrameWork: Bulma <a href = "https://bulma.io//" > Link </a> </footer> ');
        response.write('</body> </html> ');
        
        response.end();
    }

    else if (request.url === '/VideojuegoFavorito' && request.method === 'GET') {

        console.log('funciona el node videojuego favorito');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es">');
        response.write('<head>');
        response.write('<meta charset="utf-8" />');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
        response.write('<title> A01276775_Lab10 </title> </head> <body>');
        response.write('<header>');
        response.write('<nav id = "navbar">');
        response.write('<div class="nav-wrapper purple lighten-3"> ');
        response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
        response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
        response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
        response.write('<div class="Contenido ">')
        response.write('<h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1>');
        response.write('<h4>Ingresa el tuyo!!</h4></div>');
        response.write('<form action="/VideojuegoFavorito" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Diablo III"');
        response.write('<br><br>');
        response.write('<a href=""><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();
    } 
    
    else if (request.url === '/VideojuegoFavorito' && request.method === 'POST') {  
        console.log("POST");
        let datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
    
        return request.on('end', () => {
            console.log(datos);
            let datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            let nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            videojuegos.push(nuevo_dato);
            DatoNuevo('videojuegos.txt', nuevo_dato);
            console.log(videojuegos);

            response.write('<!DOCTYPE html>');
            response.write('<html lang="es">');
            response.write('<head>');
            response.write('<meta charset="utf-8" />');
            response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
            response.write('<title> A01276775_Lab10 </title> </head> <body>');
            response.write('<header>');
            response.write('<nav id = "navbar">');
            response.write('<div class="nav-wrapper purple lighten-3"> ');
            response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
            response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
            response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
            response.write('<div class="Contenido ">')
            response.write('<h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1>');
            response.write('<h4>Ingresa el tuyo!!</h4></div>');
        

            response.write('<class = "row">');

            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            for (let i in videojuegos) {
                response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a>');
            response.write('<br><br>');

            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');

            response.write('<class = "row">');

            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');

            for (let i in personajes) {
                response.write('<li class="collection-item ">' + personajes[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a>');
            response.write('<br><br>');
        
    
            response.write('</ul> </div> </h5> ');


            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');

            response.write('<class = "row">');

            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            
            for (let i in comentarios) {
                response.write('<li class="collection-item ">' + comentarios[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a>');
            response.write('<br><br>');
            response.write('</ul> </div> </h5> ');
            response.write('<footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a> <br>  FrameWork: Bulma <a href = "https://bulma.io//" > Link </a> </footer> ');
            response.write('</html> ');
            
            response.end();
        });
    }


    else if (request.url === '/Personajes' && request.method === 'GET') {


        console.log('funciona el node en añadir personaje');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es">');
        response.write('<head>');
        response.write('<meta charset="utf-8" />');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
        response.write('<title> A01276775_Lab10 </title> </head> <body>');
        response.write('<header>');
        response.write('<nav id = "navbar">');
        response.write('<div class="nav-wrapper purple lighten-3"> ');
        response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
        response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
        response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
        response.write('<div class="Contenido ">')
        response.write('<h1><FONT COLOR="purple"><center>¿Cuál es mi personaje favorito? </center> </h1></FONT></h1>');
        response.write('<h4>Ingresa tu personaje favorito!</h4></div>');
        response.write('<form action="/Personajes" method="POST">');
        response.write('<label for="nombre">Personaje: </label> ');
        response.write('<input type="text" id="personaje" name="personaje" placeholder="Viper"');
        response.write('<br><br>');
        response.write('<a href=""><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();


    }
    
   

    else if (request.url === '/Personajes' && request.method === 'POST') {  
        console.log("POST");
        let datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
    
        return request.on('end', () => {
            console.log(datos);
            let datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            let nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            personajes.push(nuevo_dato);
            DatoNuevo('personajes.txt', nuevo_dato);
            console.log(personajes);

            
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es">');
            response.write('<head>');
            response.write('<meta charset="utf-8" />');
            response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
            response.write('<title> A01276775_Lab10 </title> </head> <body>');
            response.write('<header>');
            response.write('<nav id = "navbar">');
            response.write('<div class="nav-wrapper purple lighten-3"> ');
            response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
            response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
            response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
            response.write('<div class="Contenido ">')
            response.write('<h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1>');
            response.write('<h4>Ingresa el tuyo!!</h4></div>');
           
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            for (let i in videojuegos) {
                response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a>');
            response.write('<br><br>');
    
            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            for (let i in personajes) {
                response.write('<li class="collection-item ">' +personajes[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a>');
            response.write('<br><br>');
           
       
            response.write('</ul> </div> </h5> ');
    
    
            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            
            for (let i in comentarios) {
                response.write('<li class="collection-item ">' + comentarios[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a>');
            response.write('<br><br>');
           
       
            response.write('</ul> </div> </h5> ');
    
    
    
            response.write('<footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a> <br>  FrameWork: Bulma <a href = "https://bulma.io//" > Link </a> </footer> ');
            response.write('</html> ');
            
            response.end();
          
        });

    }

    else if (request.url === '/MiComentario' && request.method === 'GET') {


        console.log('funciona el node en agregar comentarios');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es">');
        response.write('<head>');
        response.write('<meta charset="utf-8" />');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
        response.write('<title> A01276775_Lab10 </title> </head> <body>');
        response.write('<header>');
        response.write('<nav id = "navbar">');
        response.write('<div class="nav-wrapper purple lighten-3"> ');
        response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
        response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
        response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
        response.write('<div class="Contenido ">')
        response.write('<h1><FONT COLOR="purple"><center>¿Qué pienso sobre la página? </center> </h1></FONT></h1>');
        response.write('<h4>Ingresa tu comentario!</h4></div>');
        response.write('<form action="/MiComentario" method="POST">');
        response.write('<label for="nombre">Comentario: </label> ');
        response.write('<input type="text" id="comentario" name="comentario" placeholder="Me encanta!"');
        response.write('<br><br>');
        response.write('<a href=""><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary purple lighten-3 ">Regresar a ver los videojuegos!! </button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end()
    }


    else if (request.url === '/MiComentario' && request.method === 'POST') {  
        console.log("POST");
        let datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
    
        return request.on('end', () => {
            console.log(datos);
            let datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            let nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            comentarios.push(nuevo_dato);
            DatoNuevo('comentarios.txt', nuevo_dato);
            console.log(comentarios);

            
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es">');
            response.write('<head>');
            response.write('<meta charset="utf-8" />');
            response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
            response.write('<title> A01276775_Lab10 </title> </head> <body>');
            response.write('<header>');
            response.write('<nav id = "navbar">');
            response.write('<div class="nav-wrapper purple lighten-3"> ');
            response.write('<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" >');
            response.write('<ul id="nav-mobile" class="right hide-on-med-and-down">');
            response.write('<li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>');
            response.write('<div class="Contenido ">')
            response.write('<h1><FONT COLOR="purple"><center>VIDEOJUEGOS FAVORITOS DEL MES!!! </center> </h1></FONT></h1>');
            response.write('<h4>Ingresa el tuyo!!</h4></div>');
           
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            for (let i in videojuegos) {
                response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/VideojuegoFavorito"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi videojuego favorito! </button></a>');
            response.write('<br><br>');
    
            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Personajes de videojuegos favoritos de nuestros usuarios!! </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');

            for (let i in personajes) {
                response.write('<li class="collection-item ">' +personajes[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/Personajes"><button type="button" class="btn btn-outline-secondary purple lighten-4">Añadir personaje!!</button></a>');
            response.write('<br><br>');
           
       
            response.write('</ul> </div> </h5> ');
    
    
            response.write('<div class="Contenido ">')
            response.write('<h2><FONT COLOR="purple"> Comentarios de nuestros usuarios  </h1></FONT></h2>');
            response.write('<h5>Ingresa el tuyo!!</h5></div>');
    
            response.write('<class = "row">');
    
            response.write('<ul class="s2 purple lighten-5 ">')
            response.write('<h5>');
            
            for (let i in comentarios) {
                response.write('<li class="collection-item ">' + comentarios[i] + '</li>');
            } 
            response.write('</ul>');
            response.write('<a href="/MiComentario"><button type="button" class="btn btn-outline-secondary purple lighten-4">Agregar mi comentario!!</button></a>');
            response.write('<br><br>');
           
       
            response.write('</ul> </div> </h5> ');
    
    
    
            response.write('<footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a> <br>  FrameWork: Bulma <a href = "https://bulma.io//" > Link </a> </footer> ');
            response.write('</html> ');
            
            response.end();
        });
    }
    
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10 Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="Error">Esta página de videojuegos no existe :(</h1>');
        response.write('<img src="https://i.pinimg.com/236x/ff/53/93/ff53935e6607a7fa92c7dce5e8748c88.jpg" alt="" width="400" height="400" class="d-inline-block align-text-top"')
        response.write('</body>');
        response.end();
    }

    
});


server.listen(3000);