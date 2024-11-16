import express from 'express';
import { crearLibro, obtenerLibros } from '../controllers/librosController.js';

const router = express.Router();

router.post('/', crearLibro);
router.get('/', obtenerLibros);

export default router;
