// addFirstUser.js
require('dotenv').config();

const mysql = require('mysql');
const bcrypt = require('bcrypt');
const DataBase = require('./src/models/conexionModel'); // Asegúrate de ajustar la ruta según tu estructura de archivos

// Configurar la conexión a la base de datos
const db = DataBase.getInstance();

// Datos del primer usuario
const username = 'f@gmail.com'; // El correo electronico es el Nombre de usuario, modificalo por el tuyo.
const password = '123'; // Cambia la Contraseña por una segura.

// Hash de la contraseña antes de almacenarla en la base de datos
bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
        console.error('Error al cifrar la contraseña:', err);
        return;
    }

    try {
        // Insertar el primer usuario en la base de datos
        const query = 'INSERT INTO users (nombre, email, clave, estado) VALUES (?, ?, ?, ?)';
        const result = await db.ejecutarQuery(query, ['Webmaster', username, hashedPassword, '1']);
        console.log('Usuario agregado correctamente:', result);

        // Cerrar la conexión a la base de datos
        db.cerrarConexion();
    } catch (error) {
        console.error('Error al agregar usuario:', error);
        // Asegúrate de manejar los errores adecuadamente aquí
    }
    
    app.post('/ingresar-datos', (req, res) => {
        const { nombre, Apellido, Nacimiento, correo, password } = req.body;
    
        // Insertar los datos en la base de datos
        const query = 'INSERT INTO registro (nombre, Apellido, AñoNacimiento, correoElectronico, password) VALUES (?, ?, ?, ?, ?)';
        conexion.query(query, [nombre, Apellido, Nacimiento, correo, password], (error, results, fields) => {
            if (error) {
                console.error('Error al insertar datos en la base de datos:', error);
                res.status(500).send('Error al insertar datos en la base de datos');
                return;
            }
    
            console.log('Datos insertados correctamente en la base de datos');
            res.redirect('/iniciosesion');
        });
    });

});


