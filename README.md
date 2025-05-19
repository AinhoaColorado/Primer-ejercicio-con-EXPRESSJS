# Proyecto de Práctica con Node.js y Express.js

## Objetivos del Proyecto

Este proyecto tiene como finalidad afianzar conocimientos fundamentales del desarrollo backend utilizando Node.js, Express.js y Postman. Los principales objetivos fueron:

- Manejar Node.js.
- Entender cómo interactuar con Express.js.
- Aprender a manejar Express.js.
- Utilizar y gestionar paquetes con NPM.
- Utilizar Postman para probar endpoints.

---

## Ejercicios Realizados

### 📝 Ejercicio 1 - Servidor Básico

**Archivo:** `e1.js`

- Se creó un servidor básico utilizando Express.
- Al iniciar el servidor, muestra el mensaje:  
  ```
  Servidor levantado en el puerto ${puerto}
  ```

---

### 📝 Ejercicio 2 - Manejo de Rutas

**Archivo:** `ej2.js`

- Se levantó un servidor Express con múltiples rutas y métodos HTTP.
- Rutas implementadas:

  #### Productos
  - `GET /productos` → Muestra "listado de productos"
  - `POST /productos` → Muestra "crear un producto"
  - `PUT /productos` → Muestra "actualizar un producto"
  - `DELETE /productos` → Muestra "borrar un producto"

  #### Usuarios
  - `GET /usuarios` → Muestra "listado de usuarios"
  - `POST /usuarios` → Muestra "crear un usuario"
  - `PUT /usuarios` → Muestra "actualizar un usuario"
  - `DELETE /usuarios` → Muestra "borrar un usuario"

- Todas las rutas fueron probadas exitosamente con Postman.

---

### 📝 Ejercicio 3 - API de Productos

**Archivo:** `ej3.js`

- Se levantó un servidor Express que responde en la ruta `GET /products` con el siguiente JSON de productos:

```json
{
  "description": "Productos",
  "items": [
    { "id": 1, "nombre": "Taza de Harry Potter", "precio": 300 },
    { "id": 2, "nombre": "FIFA 22 PS5", "precio": 1000 },
    { "id": 3, "nombre": "Figura Goku Super Saiyan", "precio": 100 },
    { "id": 4, "nombre": "Zelda Breath of the Wild", "precio": 200 },
    { "id": 5, "nombre": "Skin Valorant", "precio": 120 },
    { "id": 6, "nombre": "Taza de Star Wars", "precio": 220 }
  ]
}
```

- Funcionalidades implementadas:
  - Endpoint para **crear** un nuevo producto.
  - Endpoint para **actualizar** un producto existente.
  - Endpoint para **eliminar** un producto.
  - **Filtro por precio** individual.
  - **Filtro por rango de precio** entre 50 y 250.
  - **Filtro por ID**: devuelve el producto con el ID especificado como parámetro.
  - **Filtro por nombre**: devuelve el producto con el nombre especificado como parámetro.

- Todas las funcionalidades fueron probadas utilizando Postman.

---

## Herramientas Utilizadas

- Node.js
- Express.js
- NPM
- Postman
