import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import cors from 'cors'; // Importa CORS

// Cargar variables de entorno
dotenv.config();

// Leer y parsear el archivo JSON
const swaggerDocument = JSON.parse(readFileSync('./swagger.json', 'utf8'));

// Inicializar la app de Express
const app = express();
app.use(express.json());




// Rutas
import usuariosRoutes from './routes/usuarios.js';
import librosRoutes from './routes/libros.js';
import prestamosRoutes from './routes/prestamos.js';
import devolucionesRoutes from './routes/devoluciones.js';
import notificacionesRoutes from './routes/notificaciones.js';
import categoriasRoutes from './routes/categorias.js';
import autoresRoutes from './routes/autores.js';

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/libros', librosRoutes);
app.use('/api/prestamos', prestamosRoutes);
app.use('/api/devoluciones', devolucionesRoutes);
app.use('/api/notificaciones', notificacionesRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/autores', autoresRoutes);

app.use((req, res, next) => {
    console.log(`Solicitud entrante: ${req.method} ${req.url}`);
    next();
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
