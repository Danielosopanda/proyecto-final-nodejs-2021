const   employeeForm = document.querySelector("#addEmployeeForm"),
        btn = document.querySelector("addEmployeeBtn");

employeeForm.addEventListener("click", (e) => {
    let employeeName = employeeForm.querySelector("#name").value,
        employeeLastName = employeeForm.querySelector("#lastName").value,
        employeeEmail = employeeForm.querySelector("#email").value,
        employeePhone = employeeForm.querySelector("#phone").value,
        employeeAdress = employeeForm.querySelector("#adress").value;

        axios({
            method: "POST",
            url: "localhost:3000/employee",
            data: {
                nombreEmpleado: employeeName,
                apellidosEmpleado: employeeLastName,
                emailEmpleado: employeeEmail,
                telefonoEmpleado: employeePhone,
                direccionEmpleado: employeeAdress
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
});