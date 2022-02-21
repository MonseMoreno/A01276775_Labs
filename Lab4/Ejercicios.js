
//Extra para las opciones, meramente práctico y estético 
function Opcion(){
    let numero_ejercicio = document.getElementById ("select").value;
     switch(numero_ejercicio){
        case "1":
            document.write(" <h4> <em> Ejercicio 1 </em> </h4>  Entrada: un número pedido con un prompt. <br> Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida <br>");
            document.write(tabla_cuadrados_cubos()); 
            document.write('<a href = "Laboratorio4.html"> Volver atrás </a>');

        break

        case "2":
            suma_aleatoria();
        break 

        case "3":
            const arreglo = [-10,20, 80, -8, 44, -27, -05, 11, 7 ]; //Arreglo
            alert ("El arreglo es " + arreglo);
            contador(arreglo);
        break

        case "4":
            let arrays = [[1,2,3,4],[5,6,7,8,],[9,10,11,12]];
            Matrices(arrays);

        break

        case "5":
            inverso();
        break

        case "6":

            //CFigura *figuras[5];
            const figuras = [];
            
            
            figuras[0] = new CFigura(); 
            figuras[1] = new CCuadrado(10);
            figuras[2] = new CTriangulo(18,3);
            figuras[3] = new CCirculo(8);
            
            
            
            for (let i = 0; i < 4; i++) {
               // alert("Figura" + i)
                figuras[i].calculoArea();
            }

        break
     }
}


// Ejercicio 1 -> 
//Entrada: un número pedido con un prompt. 
//Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida



function tabla_cuadrados_cubos() {
 
    const numero = prompt ("Ejercicio 1: Introduzca un número para realizar su tabla");
    let resultado = '<table border = "1">'; //Creación de la tabla con borde 1 
    resultado += " <tr> <td> Numero </td>" + "<td> Cuadrado </td>" + "<td> Cubo </td> </tr>"; // Creación de los encabezados de la tabla
    for (let i = 1; i <= numero; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>"; // Cerrar tabla
    return resultado; //Regresar resultado
    
}



// Ejercicio 2:
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

function suma_aleatoria(){
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;
    let resultado = numero1 + numero2;

    let tiempo_inicial = Date.now(); //Empieza a tomar el tiempo
    const respuesta = prompt ("Digite el resultado de la siguiente suma: " + numero1 +" + " + numero2);
    let tiempo_final = Date.now(); //Finaliza la toma de tiempo

    let tiempo_respuesta = (tiempo_final - tiempo_inicial) / 1000;

    if(respuesta == resultado){
        alert('La suma de los numeros es... CORRRECTA!! \nTiempo aproxzimado de respuesta: ' + tiempo_respuesta + "s");
    }

    else{
        alert("La suma de los numeros es... INCORRECTA!! \nTiempo aproxzimado de respuesta: " + tiempo_respuesta + "s" + "\nEl resuldado de la suma "  + numero1 +" + " + numero2 + " es :" + resultado );
        alert("Intente nuevamente con otra suma");
        suma_aleatoria();
    }
}


// Ejericio 3:
//Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.


function contador(numero){
   // write.document("El arreglo es  " + arreglo);
   // console.log(numero + numero.length);
   //Variables de la función
    let negativos = 0;
    let ceros = 0;
    let mayor_cero = 0;
    
    
    for (let i = 0; i<=numero.length; i++){ //For que se repite dependiendo la medida del array 
         if (numero[i] < 0){
             negativos++; // Sumador de numeros negativos 
         }
         else if (numero[i]  % 10 == 0){
            ceros++; // Sumador de numeros con ceros 
         }
         else if (numero[i]  > 0){
             mayor_cero++; // Sumador de numeros mayores a cero 
         }
    }

    //Impresión 
    alert("La cantidad de números negativos es: " + negativos + "\nLa cantidad de números con 0 es: " + ceros + "\nLa cantidad de números negativos es: " + mayor_cero);
}


// Ejercicio 4
// Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los  los promedios de cada uno de los renglones de la matriz.


function Matrices(matriz){

    alert("Su matiz es: " + matriz);
    let promedio = 0;
    let promedio_array = new Array; 

    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        let contador = 0;

        for (let j = 0; j < matriz[i].length; j++) { //Recorrido matriz
            suma += matriz[i][j];
        }

        promedio = suma/matriz.length;
        promedio_array.push("  " + promedio.toFixed(1)); // Formato de un decimal al promedio 
    }
    alert("La matriz es: " + matriz);
    alert("El promedio de cada renglón es :" + promedio_array);

}


//Ejericio 5
//Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

function inverso(){
    let numero = prompt ("Ejercicio 5: Digite un número para obtener sus digitos en orden inverso");
    let rango = numero;
    let inverso = [];
    for (let i = 0; i <= rango; i++) {
        inverso[i] = numero;
        console.log(numero--);
 
    }

    alert("Los numeros inversos son: " + inverso);
}


//Ejercio 6:
// Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
// alguna problemática que hayas identificado en algún ámbito, 
// un problema de programación que hayas resuelto en otro lenguaje,
// un problema de la ACM, entre otros). 
// El problema debe estar descrito en un documento HTML, 
// y la solución implementada en JavaScript,
// utilizando al menos la creación de un objeto,
// el objeto además de su constructor deben tener al menos 2 métodos. 
// Muestra los resultados en el documento HTML.

class CFigura{
    constructor(){

    }

    calculoArea(){
        alert("Figura base \nNo se que figura es :(")
    }

}


class CCirculo{

    constructor(r){
        this.radio = r;
    }

    calculoArea(){
   
        let calculo_area = (Math.PI *(Math.pow(this.radio, 2))).toFixed(2);
        
        alert("El radio del circulo es: " + this.radio + "u" + "\nEl área del circulo es: " + calculo_area  + "u^2");
    }

}

class CCuadrado{

    constructor (l){
        this.lado = l;
    }

    calculoArea(){
        let calculo_area = (this.lado * this.lado).toFixed(2);
        alert("El lado del cuadrado mide: " + this.lado + "u" + "\nEl área del cuadrado es: " + calculo_area + "u^2");
    }

}

class CTriangulo{

    constructor (a, b){
        this.base = b;
        this.altura = a;
    }

    calculoArea(){
        let calculo_area = (this.base * this.altura).toFixed(2);
        alert("La base del triángulo es es: " + this.base + "u" +  "\nLa altura del triángulo es: " + this.altura + "\nEl área del triangulo es: " + calculo_area + "u^2" );
    }

}




