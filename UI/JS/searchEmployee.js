const   searchForm = document.querySelector("#searchForm"),
        searchBar = document.querySelector("#searchBar"),
        tabla = document.querySelector("#tablaEmpleados");

searchForm.addEventListener("submit", (e) => {

    if(localStorage.getItem("token")) {

        let employeeName = "";
        let fullName = searchBar.value;

        let names = fullName.split(" ");
        
        let apellidos = names.pop();
            apellidos += " " + names.pop();

        apellidos = apellidos.split(" ").reverse().join("_");


        if(names.length > 1) {
            joinedNames = names.join("_");
            employeeName = joinedNames;
        } else {
            employeeName = names[0];
        }
        
        axios({
            method: "GET",
            url: "http://localhost:3000/employee/" + employeeName + "/" + apellidos,
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            let empleado = response.data.message[0];

            tabla.innerHTML = `
                                <tr class="tableHeaders">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Dirección</th>  
                                </tr>
                                <tr>
                                    <td>${empleado.idEmpleado}</td>
                                    <td>${empleado.nombreEmpleado}</td>
                                    <td>${empleado.apellidosEmpleado}</td>
                                    <td>${empleado.emailEmpleado}</td>
                                    <td>${empleado.telefonoEmpleado}</td>
                                    <td>${empleado.direccionEmpleado}</td>
                                </tr>
                            `;
            searchBar.value = "";
        })
        .catch(error => {
            console.log(error);
        });

    } else {
        window.location.href = "login.html";
    }

    e.preventDefault();

})
