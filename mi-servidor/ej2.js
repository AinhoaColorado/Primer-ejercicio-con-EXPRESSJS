const express = require("express");
const app = express();
const puerto = 3000;

// Para que pueda leer JSON si se envía
app.use(express.json());

// RUTAS DE PRODUCTOS
app.get("/productos", (req, res) => {
  res.send("listado de productos");
});

app.post("/productos", (req, res) => {
  res.send("crear un producto");
});

app.put("/productos", (req, res) => {
  res.send("actualizar un producto");
});

app.delete("/productos", (req, res) => {
  res.send("borrar un producto");
});

// RUTAS DE USUARIOS
app.get("/usuarios", (req, res) => {
  res.send("listado de usuarios");
});

app.post("/usuarios", (req, res) => {
  res.send("crear un usuario");
});

app.put("/usuarios", (req, res) => {
  res.send("actualizar un usuario");
});

app.delete("/usuarios", (req, res) => {
  res.send("borrar un usuario");
});

app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});
