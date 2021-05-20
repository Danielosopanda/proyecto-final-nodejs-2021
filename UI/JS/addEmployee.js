var headers = {};

const   employeeForm = document.querySelector("#addEmployeeForm"),
        btn = document.querySelector("#addEmployeeBtn"),
        employeeName = document.querySelector("#name"),
        employeeLastName = document.querySelector("#lastName"),
        employeeEmail = document.querySelector("#email"),
        employeePhone = document.querySelector("#phone"),
        employeeAdress = document.querySelector("#adress");


/* window.onload = () => {
    
} */


employeeForm.addEventListener("submit", (e) => {
        
    let name = employeeName.value,
        lastName = employeeLastName.value,
        email = employeeEmail.value,
        phone = employeePhone.value,
        adress = employeeAdress.value;
            

    if(localStorage.getItem("token")) {

        axios({
            method: "post",
            url: "http://localhost:3000/employee/",
                
            data: {
                nombreEmpleado: name,
                apellidosEmpleado: lastName,
                emailEmpleado: email,
                telefonoEmpleado: phone,
                direccionEmpleado: adress
            },      
                
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }  
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
                
                
    } else {
        window.location.href = "index.html";
    }
        
    e.preventDefault();
});


