import express from 'express';
import { registrarDevolucion, obtenerDevoluciones } from '../controllers/devolucionesController.js';

const router = express.Router();

router.post('/', registrarDevolucion); // Registrar devolución
router.get('/', obtenerDevoluciones); // Obtener todas las devoluciones

export default router;
