import db from '../config/database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Crear usuario
export const crearUsuario = async (req, res) => {
    const { nombre, apellido, tipo_documento, documento, correo, telefono, password, rol } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO usuarios (nombre, apellido, tipo_documento, documento, correo, telefono, password, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido, tipo_documento, documento, correo, telefono, hashedPassword, rol], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuario creado' });
    });
};

// Iniciar sesión
export const iniciarSesion = (req, res) => {
    const { correo, password } = req.body;
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(query, [correo], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });
        const usuario = results[0];
        const validPassword = await bcrypt.compare(password, usuario.password);
        if (!validPassword) return res.status(401).json({ error: 'password incorrecta' });
        const token = jwt.sign({ idUsuario: usuario.idUsuario, rol: usuario.rol }, process.env.JWT_SECRET);
        res.json({ message: 'Inicio de sesión exitoso', token });
    });
};

// Obtener todos los usuarios
export const obtenerUsuarios = (req, res) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
