const express = require('express'); // Traemos la herramienta Express y la guardamos en una constante.
const app = express(); // Creamos una "aplicación" con Express, es como el servidor.
const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});
// 	Le decimos que escuche peticiones en el puerto 3000.