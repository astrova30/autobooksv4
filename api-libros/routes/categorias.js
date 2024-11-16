import express from 'express';
import { crearCategoria, obtenerCategorias } from '../controllers/categoriasController.js';

const router = express.Router();

router.post('/', crearCategoria); // Crear categoría
router.get('/', obtenerCategorias); // Obtener todas las categorías

export default router;
