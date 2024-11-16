import db from '../config/database.js';

export const crearLibro = (req, res) => {
    const { codigoBarras, idCategoria, idAutor, titulo, editorial, fechaPublicacion, ejemplares, descripcion, tema, ubicacionLibro } = req.body;
    const query = 'INSERT INTO libros (codigoBarras, idCategoria, idAutor, titulo, editorial, fechaPublicacion, ejemplares, descripcion, tema, ubicacionLibro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [codigoBarras, idCategoria, idAutor, titulo, editorial, fechaPublicacion, ejemplares, descripcion, tema, ubicacionLibro], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Libro creado', idLibro: result.insertId });
    });
};

export const obtenerLibros = (req, res) => {
    db.query('SELECT * FROM libros', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
