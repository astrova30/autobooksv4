import db from '../config/database.js';

export const crearCategoria = (req, res) => {
    const { nombre } = req.body;
    const query = 'INSERT INTO categorias (nombre) VALUES (?)';
    db.query(query, [nombre], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Categoría creada', idCategoria: result.insertId });
    });
};

export const obtenerCategorias = (req, res) => {
    db.query('SELECT * FROM categorias', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
