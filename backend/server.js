const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

app.use(express.json());

// Prueba de conexión
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa.'))
    .catch(err => console.error('Error al conectar la base de datos:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
