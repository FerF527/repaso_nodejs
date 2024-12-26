const EventEmitter = require('events')

class ChatRoom extends EventEmitter {
    join(user){
        console.log(`${user} joined the chat room`)
        this.emit('join',user)
    }

    sendMessage(user,message){
        console.log(`${user} sent a message: ${message}`)
        this.emit('message',user,message)
    }
}

const chatRoom = new ChatRoom();

// on desencadena una acción cuando se llama al metodo join
chatRoom.on("join",(user)=> {
    console.log(`Welcome ${user}`)
})

// on desencadena una acción cuando se llama al metodo sendMessage
chatRoom.on("message",(user,message)=>{
    console.log(`New message from ${user}: ${message}`)
})

chatRoom.join("Jhon")
chatRoom.join("Jane")
chatRoom.sendMessage("Jhon","Hello World!")
chatRoom.sendMessage("Jane","Hello Jane")
