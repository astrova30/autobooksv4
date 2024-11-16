import express from 'express';
import { crearNotificacion, obtenerNotificaciones, marcarLeida } from '../controllers/notificacionesController.js';

const router = express.Router();

router.post('/', crearNotificacion); // Crear notificación
router.get('/:idUsuario', obtenerNotificaciones); // Obtener notificaciones de un usuario
router.put('/:id', marcarLeida); // Marcar notificación como leída

export default router;
