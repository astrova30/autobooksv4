import db from '../config/database.js';

export const crearNotificacion = (req, res) => {
    const { idUsuario, mensaje } = req.body;
    const query = 'INSERT INTO notificaciones (idUsuario, mensaje) VALUES (?, ?)';
    db.query(query, [idUsuario, mensaje], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Notificación creada', idNotificacion: result.insertId });
    });
};

export const obtenerNotificaciones = (req, res) => {
    const { idUsuario } = req.params;
    const query = 'SELECT * FROM notificaciones WHERE idUsuario = ?';
    db.query(query, [idUsuario], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

export const marcarLeida = (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE notificaciones SET leido = TRUE WHERE idNotificacion = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Notificación marcada como leída' });
    });
};
