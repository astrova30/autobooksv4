import db from '../config/database.js';

export const crearPrestamo = (req, res) => {
    const { idUsuario, idLibro, fechaEstimadaDevolucion } = req.body;
    const query = 'INSERT INTO prestamos (idUsuario, idLibro, fechaEstimadaDevolucion) VALUES (?, ?, ?)';
    db.query(query, [idUsuario, idLibro, fechaEstimadaDevolucion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Préstamo solicitado', idPrestamo: result.insertId });
    });
};

export const obtenerPrestamos = (req, res) => {
    db.query('SELECT * FROM prestamos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

export const actualizarPrestamo = (req, res) => {
    const { id } = req.params;
    const { estado, motivo_rechazo } = req.body;
    const query = 'UPDATE prestamos SET estado = ?, motivo_rechazo = ? WHERE idPrestamo = ?';
    db.query(query, [estado, motivo_rechazo, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Estado del préstamo actualizado' });
    });
};
