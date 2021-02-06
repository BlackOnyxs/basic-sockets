class Sockets{

    constructor( io ){
        
        this.io = io;

        this.socketEvents();
        
    }

    socketEvents(){
        this.io.on('connection', ( socket ) => {
        
            socket.on('mensaje-cliente', ( data ) => {
                console.log(data)
            });

        });
        
    }
}

module.exports = Sockets;