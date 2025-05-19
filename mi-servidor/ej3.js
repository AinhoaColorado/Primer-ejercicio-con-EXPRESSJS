const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Para leer JSON en body

let productos = [
  { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
  { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
  { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
  { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
  { id: 5, nombre: 'Skin Valorant', precio: 120 },
  { id: 6, nombre: 'Taza de Star Wars', precio: 220 },
];

// GET /products: devuelve todos los productos
app.get('/products', (req, res) => {
  res.json({
    description: 'Productos',
    items: productos
  });
});

// POST /products: crear un producto nuevo
app.post('/products', (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = productos.length + 1;
  productos.push(nuevoProducto);
  res.json({ mensaje: 'Producto creado', producto: nuevoProducto });
});

// PUT /products/:id: actualizar un producto
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensaje: 'Producto no encontrado' });

  productos[index] = { ...productos[index], ...req.body };
  res.json({ mensaje: 'Producto actualizado', producto: productos[index] });
});

// DELETE /products/:id: eliminar un producto
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  productos = productos.filter(p => p.id !== id);
  res.json({ mensaje: `Producto con ID ${id} eliminado` });
});

// GET /products/precio/:precio: filtrar productos por precio exacto
app.get('/products/precio/:precio', (req, res) => {
  const precio = parseInt(req.params.precio);
  const filtrados = productos.filter(p => p.precio === precio);
  res.json(filtrados);
});

// GET /products/precio-rango: productos con precio entre 50 y 250
app.get('/products/precio-rango', (req, res) => {
  const filtrados = productos.filter(p => p.precio >= 50 && p.precio <= 250);
  res.json(filtrados);
});

// GET /products/id/:id: buscar producto por ID
app.get('/products/id/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  producto ? res.json(producto) : res.status(404).json({ mensaje: 'Producto no encontrado' });
});

// GET /products/nombre/:nombre: buscar producto por nombre
app.get('/products/nombre/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const producto = productos.find(p => p.nombre.toLowerCase().includes(nombre));
  producto ? res.json(producto) : res.status(404).json({ mensaje: 'Producto no encontrado' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
