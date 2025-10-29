const express = require("express");
const cors = require("cors");
const dotenv = require ("dotenv");
const connectDB = require ("./config/db");
const empleadoRoutes = require ("./routes/empleados"); 

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/empleados", empleadoRoutes);

app.get("/",(req,res) =>{
    res.send("API de gestion de empleados funcionando");
});

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});