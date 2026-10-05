const prompt = require('prompt-sync')();
let pinCorrecto = 2376;

let pedirPin = prompt('Escribe tu PIN: ');
while(Number(pedirPin) !== pinCorrecto){
    console.log("Clave incorrecta")
    pedirPin = prompt('Escribe tu PIN: ');
}
console.log("Correcto: entrando a nequi");