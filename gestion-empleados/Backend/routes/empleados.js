const express = require("express");
const router = express.Router();
const Empleado = require ("../models/empleado");


router.post("/", async (req, res)=>{
    try{
        const empleado = new Empleado (req.body);
        await empleado.save();
        res.status(201).json({message:"empleado registrado exitosamente", empleado});
    }catch (error){
        res.status(400).json({message: error.message});
    }
});


router.get("/", async (req, res)=> {
    try{
        const empleados = await Empleado.find();
        res.json(empleados);
    }catch (error){
        res.status(500).json({message:error.message})
    }
});


router.get("/:id", async (req,res)=>{
    try{
        const empleado= await Empleado.findById(req.params.id);
        if (!empleado) {
            return res.status(404).json({message:"empleado no encotrado"});
      
        }

        res.json(empleado);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

});

router.put("/:id", async (req,res) => {
    try {
        const empleado =await Empleado.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });
        if (!empleado) {
            return res.status(404).json({message: "empleado no encontrado "});
        }
        res.json({message: "empleado actualizado exitosamente", empleado});

    } catch (error) {
        res.status(400).json({message:error.message});
    }

});

router.delete("/:id", async (req,res) => {
    try{
        const empleado = await Empleado.findByIdAndDelete(req.params.id);
        if (!empleado) {
            return res.status(404).json({message:"empleado no encontrado"});
        }
        res.json({message:"empleado eliminaado exitosamente"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

module.exports= router;