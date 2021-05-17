const { response } = require("express");
const express = require("express");
const employee = express.Router();
const db = require("./database");

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
    
    const {nombreEmpleado, apellidosEmpleado, emailEmpleado, telefonoEmpleado, direccionEmpleado} = request.body;
    let query = `INSERT INTO Empleado VALUES (NULL, '${nombreEmpleado}', '${apellidosEmpleado}', '${emailEmpleado}', '${telefonoEmpleado}', '${direccionEmpleado}')`;

    const rows = await db.query(query);

});

module.exports = employee;