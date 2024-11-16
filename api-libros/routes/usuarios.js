import express from 'express';
import { crearUsuario, obtenerUsuarios, iniciarSesion } from '../controllers/usuariosController.js';

const router = express.Router();

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.post('/login', iniciarSesion);

export default router;
