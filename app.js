const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const categoriaRoute = require('./routes/categorias.routes');
const subcategoriaRoute = require('./routes/subcategorias.routes');
const productoRoute = require('./routes/productos.routes');

app.use(express.json());

app.use('/api/categoria', categoriaRoute);
app.use ('/api/subcategoria', subcategoriaRoute);
app.use('/api/producto', productoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});