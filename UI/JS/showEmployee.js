var headers = {},
    url = "http://localhost:3000";

window.onload = () => {

    if(localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadEmployees();
    } else {
        window.location.href = "index.html";
    }

}

const loadEmployees = () => {

    axios.get(`${url}/employee`, headers)

    .then(response => {
        /* console.log(response); */
        displayEmployee(response.data.message);
    })
    .catch(error => {
        console.log(error);
    });

}

const displayEmployee = (employee) => {

    let employeeTable = document.querySelector("#tablaEmpleados");

    employee.forEach(empleado => {

        employeeTable.innerHTML += ` 
                                    <tr>
                                        <td>${empleado.idEmpleado}</td>
                                        <td>${empleado.nombreEmpleado}</td>
                                        <td>${empleado.apellidosEmpleado}</td>
                                        <td>${empleado.emailEmpleado}</td>
                                        <td>${empleado.telefonoEmpleado}</td>
                                        <td>${empleado.direccionEmpleado}</td>
                                    </tr>
                                `;

    });

}
