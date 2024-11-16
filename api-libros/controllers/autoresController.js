import db from '../config/database.js';

// Crear un nuevo autor
export const crearAutor = (req, res) => {
    const { nombre, nacionalidad } = req.body;
    const query = 'INSERT INTO autores (nombre, nacionalidad) VALUES (?, ?)';
    db.query(query, [nombre, nacionalidad], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Autor creado', idAutor: result.insertId });
    });
};

// Obtener todos los autores
export const obtenerAutores = (req, res) => {
    const query = 'SELECT * FROM autores';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Obtener un autor por ID
export const obtenerAutorPorId = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM autores WHERE idAutor = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Autor no encontrado' });
        res.json(results[0]);
    });
};

// Actualizar un autor
export const actualizarAutor = (req, res) => {
    const { id } = req.params;
    const { nombre, nacionalidad } = req.body;
    const query = 'UPDATE autores SET nombre = ?, nacionalidad = ? WHERE idAutor = ?';
    db.query(query, [nombre, nacionalidad, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Autor no encontrado' });
        res.json({ message: 'Autor actualizado' });
    });
};

// Eliminar un autor
export const eliminarAutor = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM autores WHERE idAutor = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Autor no encontrado' });
        res.json({ message: 'Autor eliminado' });
    });
};
