user1cristian = [10000,-5000,60000,90000,-20000]
user2david = [100000,-55000,600000,-90000,-100000]
user3santiago = [100000,-55000,-30000,9000000,-300000]

const USUARIOS = [user1cristian,user2david,user3santiago]
const NOMBRES = ["Cristian","David","Santiago"]

for (let i = 0; i < USUARIOS.length; i++){
   let totalUsuario = 0;
   for (let m = 0; m < USUARIOS[i].length; m++){
    totalUsuario += USUARIOS[i][m];
   }
   console.log("Usuario: " + NOMBRES[i])
   console.log("Total: " + totalUsuario)
}
