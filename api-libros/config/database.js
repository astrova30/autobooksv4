import mysql from 'mysql2';

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'acampos',
    password: '1256Eli*a1',
    database: 'libros'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

export default db;
