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