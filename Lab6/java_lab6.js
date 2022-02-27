
// M.AutoInit();
// let div_pregunta = document.getElementById ("Pregunta2");
// div_pregunta.onclick =  Mostrar_pregunta;

//Variables 
var cantidad_mochila1 = 0;
var cantidad_mochila2 = 0;
var cantidad_mochila3 = 0;

//Precios

var precio_mochila1 = 580-30;
var precio_mochila2 = 550-30;
var precio_mochila3 = 500;



var iva = .07;


function Mostrar_pregunta(){
     let div_pregunta = document.getElementById ("Pregunta");
     let pregunta = "<h5>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor? </h5> <br>";
     let respuesta = "Lorem ipsum dolor sit amet consectetur adipiscing, elit ante viverra nostra ornare. Placerat nisl bibendum sociosqu pulvinar euismod velit neque mattis nunc, luctus dui mus tristique nibh nulla nisi eget interdum nec, tempor class suspendisse dis maecenas quis rhoncus libero. Dui ultricies id aliquam elementum venenatis taciti sed tempus placerat sem, per integer lectus fusce vitae nascetur pharetra risus odio, curabitur natoque eu vestibulum interdum montes varius massa urna. Velit vel inceptos a luctus hendrerit rhoncus gravida ullamcorper libero, nibh malesuada suspendisse et penatibus aliquam tempor.";

    div_pregunta.innerHTML =  pregunta + respuesta;
    document.getElementById("Pregunta1").onclick=  Vaciar_pregunta;
}

document.getElementById("Pregunta2").onclick = () => {
    let div_pregunta = document.getElementById ("Pregunta");
    let pregunta = "<h5>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript? </h5> <br>";
    let respuesta = "Lorem ipsum dolor sit amet consectetur adipiscing, elit ante viverra nostra ornare. Placerat nisl bibendum sociosqu pulvinar euismod velit neque mattis nunc, luctus dui mus tristique nibh nulla nisi eget interdum nec, tempor class suspendisse dis maecenas quis rhoncus libero. Dui ultricies id aliquam elementum venenatis taciti sed tempus placerat sem, per integer lectus fusce vitae nascetur pharetra risus odio, curabitur natoque eu vestibulum interdum montes varius massa urna. Velit vel inceptos a luctus hendrerit rhoncus gravida ullamcorper libero, nibh malesuada suspendisse et penatibus aliquam tempor.";

   div_pregunta.innerHTML =  pregunta + respuesta;

}

document.getElementById("Pregunta3").onclick = () => {
    let div_pregunta = document.getElementById ("Pregunta");
    let pregunta = "<h5>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</h5> <br>";
    let respuesta = "Lorem ipsum dolor sit amet consectetur adipiscing, elit ante viverra nostra ornare. Placerat nisl bibendum sociosqu pulvinar euismod velit neque mattis nunc, luctus dui mus tristique nibh nulla nisi eget interdum nec, tempor class suspendisse dis maecenas quis rhoncus libero. Dui ultricies id aliquam elementum venenatis taciti sed tempus placerat sem, per integer lectus fusce vitae nascetur pharetra risus odio, curabitur natoque eu vestibulum interdum montes varius massa urna. Velit vel inceptos a luctus hendrerit rhoncus gravida ullamcorper libero, nibh malesuada suspendisse et penatibus aliquam tempor.";
    div_pregunta.innerHTML =  pregunta + respuesta;
}



function verificar_contraseña(){
    let div_saludo = document.getElementById("Contraseña_verificada");
    const User =  document.getElementById("Usuario").value;
    const contra =  document.getElementById("Contraseña").value;
    const ver_contra =  document.getElementById("Verificar_contraseña").value;

    if (contra == ver_contra && contra != "" &&  User != ""){
        div_saludo.innerHTML = '< <div class="col s9 m3"> <div class="card-panel teal lighten-4"> <span> Hola! ' +  User  + '<br> Contraseña correctamente verificada!!</span></div></div>'
    }

    else if (contra != ver_contra && contra != ""  &&  User != ""){
        div_saludo.innerHTML = ' <div class="col s9 m3"> <div class="card-panel red lighten-3"> <span> Hola! ' +  User  + '<br> Las contraseñas no son iguales!! :(</span></div></div>'
        
    }

    else{
        div_saludo.innerHTML = ' <div class="col s9 m3"> <div class="card-panel blue lighten-4"> <span> Por favor, rellene todos los datos</span></div></div>'
    }
}

function Guardar_cantidad(){
    cantidad_mochila1 = document.getElementById("cantidad_mochila_1").value;
   // console.log("cantidad mochila 1: " + cantidad_mochila1);
}

document.getElementById("cantidad_mochila_2").onchange = () => {
    cantidad_mochila2 = document.getElementById("cantidad_mochila_2").value;
    //console.log("cantidad mochila 2: " + cantidad_mochila2);
}


document.getElementById("cantidad_mochila_3").onchange = () => {
    cantidad_mochila3 = document.getElementById("cantidad_mochila_3").value;
    //console.log("cantidad mochila 3: " + cantidad_mochila3);
}

function Calcular_precio(){
    console.log("cantidad mochila 1: " + cantidad_mochila1);
    console.log("cantidad mochila 2: " + cantidad_mochila2);
    console.log("cantidad mochila 3: " + cantidad_mochila3);

    let precio_producto = (cantidad_mochila1 * precio_mochila1) + (cantidad_mochila2 * precio_mochila2) + (cantidad_mochila3 * precio_mochila3);
    let precio_total = precio_producto + (precio_producto * iva);
    console.log(precio_producto);
    console.log(precio_total);

    let div_pregunta = document.getElementById ("precio");
    div_pregunta.innerHTML =  "<h4> El total de su compra es: $" + precio_total + " MXN</h4>" ;

}











