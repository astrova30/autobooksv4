import db from '../config/database.js';

export const registrarDevolucion = (req, res) => {
    const { idPrestamo, condicion } = req.body;
    const query = 'INSERT INTO devoluciones (idPrestamo, condicion) VALUES (?, ?)';
    db.query(query, [idPrestamo, condicion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Devolución registrada', idDevolucion: result.insertId });
    });
};

export const obtenerDevoluciones = (req, res) => {
    db.query('SELECT * FROM devoluciones', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
