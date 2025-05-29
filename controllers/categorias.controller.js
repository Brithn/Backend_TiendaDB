const db = require('../config/db');
// GET
exports.getCategorias = async (req, res) => {
  db.query('SELECT * FROM Categorias', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
// POST
exports.createCategorias = (req, res) => {
  const { Nombre, Especialidad } = req.body;
  db.query('INSERT INTO Categorias (Nombre) VALUES (?)', [Nombre], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, Nombre, Especialidad });
  });
};

// DELETE
exports.deleteCategoria = (req, res) => {
  db.query('DELETE FROM Categorias WHERE Id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: `No se encontró el id = ${req.params.id}` });
    }
    res.json({ mensaje: `Se ha eliminado el id = ${req.params.id}` });
  });
};
