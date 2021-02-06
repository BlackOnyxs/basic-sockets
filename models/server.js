const express = require('express');
const http =require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.server = http.createServer( this.app );

        this.io = socketio( this.server );
    }

    middlewares(){
        this.app.use(express.static( path.resolve(__dirname, '../public') ) );
        this.app.use( cors() );
    }

    configurarSockest(){
        new Sockets( this.io );
    }

    execute(){
        
        this.middlewares();

        this.server.listen(this.port, ()=> {
            console.log(`Server corriendo en el puerto ${ this.port }`)
        });
    }


}

module.exports = Server;