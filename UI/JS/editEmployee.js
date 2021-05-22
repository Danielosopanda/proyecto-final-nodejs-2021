const editRegEx = {
    id: /^[0-9]{1,5}$/,
    name: /^[A-Za-zÁ-ÿ\s]{3,30}$/,
    lastName: /^[A-Za-zÁ-ÿ]{3,15}\s[A-Za-zÁ-ÿ]{3,15}$/,
    email: /^[A-Za-z0-9._-]+[A-Za-z0-9._-]*\@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+$/,
    phone: /^[0-9\s]{7,15}$/,
}

const editCampos = {
    id: false,
    name: false,
    lastName: false,
    email: false,
    phone: false,
    adress: false
}

const editInputs = document.querySelectorAll("#editEmployeeForm .textInput");

editInputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid rgb(29, 119, 255)"
    });
    input.addEventListener("blur", () => {
        input.style.border = "2px solid #000";
    });
});

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

    verifyEditId(id);
    verifyEditName(name);
    verifyEditLastName(lastName);
    verifyEditEmail(email);
    verifyEditPhone(phone);
    verifyEditAdress(adress);

    if(editCampos.id && editCampos.name && editCampos.lastName && editCampos.email && editCampos.phone && editCampos.adress) {
        if(localStorage.getItem("token")) {

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

    } else {
        e.preventDefault();
    }
});

const verifyEditId = (id) => {
    if(editRegEx.id.test(id)) {
        employeeEditId.style.border = "2px solid #4bb543";
        editCampos.id = true;
    } else {
        employeeEditId.style.border = "2px solid #cc0000";
        editCampos.id = false;   
    }
}

const verifyEditName = (name) => {
    if(editRegEx.name.test(name)) {
        employeeEditName.style.border = "2px solid #4bb543";
        editCampos.name = true;
    } else {
        employeeEditName.style.border = "2px solid #cc0000";
        editCampos.name = false;
    }
}

const verifyEditLastName = (lastName) => {
    if(editRegEx.lastName.test(lastName)) {
        employeeEditLastName.style.border = "2px solid #4bb543";
        editCampos.lastName = true;
    } else {
        employeeEditLastName.style.border = "2px solid #cc0000";
        editCampos.lastName = false;
    }
}

const verifyEditEmail = (email) => {
    if(editRegEx.email.test(email)) {
        employeeEditEmail.style.border = "2px solid #4bb543";
        editCampos.email = true;
    } else {
        employeeEditEmail.style.border = "2px solid #cc0000";
        editCampos.email = false;
    }
}

const verifyEditPhone = (phone) => {
    if(editRegEx.phone.test(phone)) {
        employeeEditPhone.style.border = "2px solid #4bb543";
        editCampos.phone = true;
    } else {
        employeeEditPhone.style.border = "2px solid #cc0000";
        editCampos.phone = false;
    }
}

const verifyEditAdress = () => {
    if(employeeEditAdress.value == "") {
        employeeEditAdress.style.border = "2px solid #cc0000";
        editCampos.adress = false;
    } else {
        employeeEditAdress.style.border = "2px solid #4bb543";
        editCampos.adress = true;
    }
}