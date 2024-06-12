require('dotenv').config();
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081; // Default to 8081 if PORT is not set
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    // Método para definir los middlewares
    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio público
        this.app.use(express.static('public'));

        // Parseo y lectura del body
        this.app.use(express.json());
    }

    // Método para definir las rutas
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    // Método para iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
