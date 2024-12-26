const EventEmitter = require('events')
const fs = require("fs/promises")

class FileReadEmitter extends EventEmitter {
    async readFile(file){
        try{
            const data = await fs.readFile(file, "utf-8")
            this.emit("read",file,data)
        }catch(error){
            this.emit("error",error)
        }
    }
}

const fileReadEmitter = new FileReadEmitter()

fileReadEmitter.on("read",(file,data)=>{
    console.log(`File ${file} read successfully`)
    console.log(data);
})

fileReadEmitter.on("error",(error)=>{
    console.error(`There was an error: ${error.message}`)
})

