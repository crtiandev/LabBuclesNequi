const MOVIMIENTOS = [0,100000,0,50000,0,-200000,1000000,-500000];
let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < MOVIMIENTOS.length; i++){
    total = MOVIMIENTOS[i] + total;
    if (MOVIMIENTOS[i]< 0){
        cantidadRetiros++
    }
    console.log(`cantidad de retiros: `, cantidadRetiros);
    console.log(`total en la cuenta: `, total);

}
module.exports = MOVIMIENTOS;