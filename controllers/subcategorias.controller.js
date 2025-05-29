const db = require('../config/db');
// GET 
exports.getSubcategorias = (req, res) => {
  db.query('SELECT * FROM Subcategorias', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
// POST 
exports.createSubcategoria = (req, res) => {
  const { Nombre, CategoriaId } = req.body;
  if (!Nombre || !CategoriaId) {
    return res.status(400).json({ error: "Nombre y CategoriaId son obligatorios" });
  }

  db.query(
    'INSERT INTO Subcategorias (Nombre, CategoriaId) VALUES (?, ?)',
    [Nombre, CategoriaId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, Nombre, CategoriaId });
    }
  );
};
// DELETE 
exports.deleteSubcategoria = (req, res) => {
   db.query('DELETE FROM Subcategorias WHERE Id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: `No se encontró el id = ${req.params.id}` });
    }
    res.json({ mensaje: `Se ha eliminado el id = ${req.params.id}` });
  });
};
