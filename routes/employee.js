const { response } = require("express");
const express = require("express");
const employee = express.Router();
const db = require("../config/database");

employee.get("/", async (request, response, next) => {

    let query = "SELECT * FROM Empleado";
    const rows = await db.query(query);
    return response.status(200).json({ code: 200, message: rows });

});

employee.get("/:nombreEmpleado", async (request, response, next) => {

    let nombre = request.params.nombreEmpleado;

    let query = `SELECT * FROM Empleado WHERE nombreEmpleado = '${nombre}'`;
    const rows = await db.query(query);
    return response.status(200).json({ code: 200, message: rows });

});

employee.post("/", async (request, response, next) => {
    
    const { nombreEmpleado, apellidosEmpleado, emailEmpleado, telefonoEmpleado, direccionEmpleado } = request.body;
    let query = `INSERT INTO Empleado VALUES (NULL, '${nombreEmpleado}', '${apellidosEmpleado}', '${emailEmpleado}', '${telefonoEmpleado}', '${direccionEmpleado}')`;
    

    if(nombreEmpleado && apellidosEmpleado && emailEmpleado && telefonoEmpleado && direccionEmpleado) {
        const rows = await db.query(query);
        if(rows.affectedRows == 1) {
            return response.status(200).json({ code:200, message: "Empleado añadido" });
        }
        return response.status(500).json({ code: 500, message: "Error en el servidor" });
    }
    return response.status(500).json({ code: 500, message: "Campos incompletos" });
    

});

module.exports = employee;