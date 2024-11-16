import express from 'express';
import { crearPrestamo, obtenerPrestamos, actualizarPrestamo } from '../controllers/prestamosController.js';

const router = express.Router();

router.post('/', crearPrestamo); // Solicitar préstamo
router.get('/', obtenerPrestamos); // Obtener todos los préstamos
router.put('/:id', actualizarPrestamo); // Actualizar estado del préstamo

export default router;
