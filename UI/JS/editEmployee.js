const editForm = document.querySelector("#editEmployeeForm"),
      employeeEditId = document.querySelector("#editId"),
      employeeEditName = document.querySelector("#editName"),
      employeeEditLastName = document.querySelector("#editLastName"),
      employeeEditEmail = document.querySelector("#editEmail"),
      employeeEditPhone = document.querySelector("#editPhone"),
      employeeEditAdress = document.querySelector("#editAdress");  

var hidden = true;

const   editBtn = document.querySelector("#btnEdit"),
        cancelEdit = document.querySelector("#cancelEdit"),
        edContainer = document.querySelector("#container");

editBtn.addEventListener("click", () => {
    if(hidden) {        
        editForm.style.visibility = "visible";
        edContainer.style.filter = "blur(4px)";
        editForm.style.display = "block";
        hidden = false;
    } 
});
        
cancelEdit.addEventListener("click", () => {
    if(!hidden) {
        editForm.style.visibility = "hidden";
        edContainer.style.filter = "none";
        editForm.style.display = "none";
        hidden = true;
    }
});

editForm.addEventListener("submit", (e) => {

    let id = employeeEditId.value,
        name = employeeEditName.value,
        lastName = employeeEditLastName.value,
        email = employeeEditEmail.value,
        phone = employeeEditPhone.value,
        adress= employeeEditAdress.value;

    if(localStorage.getItem("token")){

        axios({
            method: "PUT",
            url: "http://localhost:3000/employee/" + id,
            data:{
                nombreEmpleado: name,
                apellidosEmpleado: lastName,
                emailEmpleado: email,
                telefonoEmpleado: phone,
                direccionEmpleado: adress
            },
            headers:{
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    } else {
        window.location.href = "index.html"
    } 
});
