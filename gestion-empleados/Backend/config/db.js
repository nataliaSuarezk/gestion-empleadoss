const mongoose = require("mongoose")

const connectDB=async () =>  {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
     .then(() => console.log("Conectado a MongoDB"))
     .catch(err => console.error("Error al conectar MongoDB:", err));

        console.log("MongoDB conectado exitosamete");
    }catch(error){
        console.error("error al conectar MongoDB:",error.message);
        process.exit(1);
    }
};

module.exports=connectDB;