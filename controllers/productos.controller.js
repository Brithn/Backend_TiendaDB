const db = require('../config/db');

// GET 
exports.getProductos = (req, res) => {
  db.query('SELECT * FROM Productos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
// POST 
exports.createProducto = (req, res) => {
  const { Nombre, Precio, Stock, SubcategoriaId } = req.body;
  if (!Nombre || !Precio || !SubcategoriaId) {
    return res.status(400).json({ error: "Nombre, Precio y SubcategoriaId son obligatorios" });
  }
  db.query(
    'INSERT INTO Productos (Nombre, Precio, Stock, SubcategoriaId) VALUES (?, ?, ?, ?)',
    [Nombre, Precio, Stock, SubcategoriaId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, Nombre, Precio, Stock, SubcategoriaId });
    }
  );
};

// DELETE 
exports.deleteProducto = (req, res) => {
  db.query('DELETE FROM Productos WHERE Id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: `No se encontró el id = ${req.params.id}` });
    }
    res.json({ mensaje: `Se ha eliminado el id = ${req.params.id}` });
  });
};

// endpoint Complejo
exports.getProductosDetallado = (req, res) => {
  const query = `
    SELECT 
      p.Nombre AS Producto,
      p.Precio,
      p.Stock,
      s.Nombre AS Subcategoria,
      c.Nombre AS Categoria,
      TIMESTAMPDIFF(YEAR, p.FechaIngreso, CURDATE()) AS AniosEnInventario
    FROM Productos p
    JOIN Subcategorias s ON p.SubcategoriaId = s.Id
    JOIN Categorias c ON s.CategoriaId = c.Id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};