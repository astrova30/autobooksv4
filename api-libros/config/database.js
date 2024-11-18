import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'bkr36nfeb1hg6kwfrfbe-mysql.services.clever-cloud.com',
    user: 'uenliw11s4rztcv6',
    password: '6Hhm70ZPc3nrav3r7AP7',
    database: 'bkr36nfeb1hg6kwfrfbe'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

export default db;
