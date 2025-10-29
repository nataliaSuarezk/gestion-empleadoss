const mongoose = require("mongoose");

const empeadoSchema=new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    cargo:{
       type:String,
        required:true,
    },
    salario:{
        type: Number,
        required:true

    }
});

module.exports = mongoose.model ("empleado", empeadoSchema)