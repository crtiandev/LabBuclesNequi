const MOVIMIENTOS = require('./ejercicio01.js');

for (let i=0; i < MOVIMIENTOS.length; i++){
    if (MOVIMIENTOS[i] === 0){
        continue;
    }
        else if (MOVIMIENTOS[i] < 0){
            console.log("Posicion: " + i)
            break
        }
}