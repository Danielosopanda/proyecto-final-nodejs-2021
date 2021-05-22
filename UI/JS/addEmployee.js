const   employeeForm = document.querySelector("#addEmployeeForm"),
        btn = document.querySelector("#addEmployeeBtn"),
        employeeName = document.querySelector("#name"),
        employeeLastName = document.querySelector("#lastName"),
        employeeEmail = document.querySelector("#email"),
        employeePhone = document.querySelector("#phone"),
        employeeAdress = document.querySelector("#adress");

const regEx = {
    name: /^[A-Za-zÁ-ÿ\s]{3,30}$/,
    lastName: /^[A-Za-zÁ-ÿ]{3,15}\s[A-Za-zÁ-ÿ]{3,15}$/,
    email: /^[A-Za-z0-9._-]+[A-Za-z0-9._-]*\@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+$/,
    phone: /^[0-9\s]{7,15}$/,
}

const campos = {
    name: false,
    lastName: false,
    email: false,
    phone: false,
    adress: false
}

const inputs = document.querySelectorAll("#addEmployeeForm .textInput");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid rgb(29, 119, 255)"
    });
    input.addEventListener("blur", () => {
        input.style.border = "2px solid #000";
    });
});


employeeForm.addEventListener("submit", (e) => {
        
    let name = employeeName.value,
        lastName = employeeLastName.value,
        email = employeeEmail.value,
        phone = employeePhone.value,
        adress = employeeAdress.value;
            
    verifyName(name);
    verifyLastName(lastName);
    verifyEmail(email);
    verifyPhone(phone);
    verifyAdress(adress);

    if(campos.name && campos.lastName && campos.email && campos.phone && campos.adress) {
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
    } else {
        e.preventDefault()
    }
});

const verifyName = (name) => {
    if(regEx.name.test(name)) {
        employeeName.style.border = "2px solid #4bb543";
        campos.name = true;
    } else {
        employeeName.style.border = "2px solid #cc0000";
        campos.name = false;
    }
}

const verifyLastName = (lastName) => {
    if(regEx.lastName.test(lastName)) {
        employeeLastName.style.border = "2px solid #4bb543";
        campos.lastName = true;
    } else {
        employeeLastName.style.border = "2px solid #cc0000";
        campos.lastName = false;
    }
}

const verifyEmail = (email) => {
    if(regEx.email.test(email)) {
        employeeEmail.style.border = "2px solid #4bb543";
        campos.email = true;
    } else {
        employeeEmail.style.border = "2px solid #cc0000";
        campos.email = false;
    }
}

const verifyPhone = (phone) => {
    if(regEx.phone.test(phone)) {
        employeePhone.style.border = "2px solid #4bb543";
        campos.phone = true;
    } else {
        employeePhone.style.border = "2px solid #cc0000";
        campos.phone = false;
    }
}

const verifyAdress = () => {
    if(employeeAdress.value == "") {
        employeeAdress.style.border = "2px solid #cc0000";
        campos.adress = false;
    } else {
        employeeAdress.style.border = "2px solid #4bb543";
        campos.adress = true;
    }
}