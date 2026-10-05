const prompt = require('prompt-sync')();
let opcion = 0;
do {
    console.log("1) Ver saldo\n2) Enviar dinero\n3) Recargar\n4) Salir.");
    console.log("////////////////////////////////////////")
    opcion = prompt('digita el numero de opcion 1,2,3,4');

    if (opcion === "1"){
        console.log("Tu saldo es: ");
        console.log("////////////////////////////////////////")
    }
        else if (opcion === "2"){
            console.log("numero a enviar");
            console.log("////////////////////////////////////////")
        }
        else if (opcion === "3"){
            console.log("cuanto vas a recargar: ");
            console.log("////////////////////////////////////////")
        }
        else if (opcion !== "4"){
            console.log("no exite la opcion: " + opcion);
            console.log("////////////////////////////////////////")
        }
        
}
while (opcion !== "4");

console.log("saliste de nequi");

