import express from 'express';
import { crearAutor, obtenerAutores, obtenerAutorPorId, actualizarAutor, eliminarAutor } from '../controllers/autoresController.js';

const router = express.Router();

router.post('/', crearAutor); // Crear un nuevo autor
router.get('/', obtenerAutores); // Obtener todos los autores
router.get('/:id', obtenerAutorPorId); // Obtener un autor por ID
router.put('/:id', actualizarAutor); // Actualizar información de un autor
router.delete('/:id', eliminarAutor); // Eliminar un autor

export default router;
