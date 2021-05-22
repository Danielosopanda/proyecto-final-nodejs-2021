const deleteRegEx = {
    id: /^[0-9]{1,5}$/
}

const deleteCampos = {
    id: false
}

const   acceptDelete = document.querySelector("#acceptDelete"),
        cancelDelete = document.querySelector("#cancelDelete"),
        deleteForm = document.querySelector("#deleteEmployeeForm"),
        employeeId = document.querySelector("#deleteEmployee"),
        deleteBtn = document.querySelector("#btnDelete"),
        scontainer = document.querySelector("#container");

var hidden = true;

deleteBtn.addEventListener("click", () => {
    if(hidden) {        
        deleteForm.style.visibility = "visible";
        scontainer.style.filter = "blur(4px)";
        deleteForm.style.display = "block";
        hidden = false;
    } 
});
        
cancelDelete.addEventListener("click", () => {
    if(!hidden) {
        deleteForm.style.visibility = "hidden";
        scontainer.style.filter = "none";
        deleteForm.style.display = "none";
        hidden = true;
    }
});

       
deleteForm.addEventListener("submit", (e)=>{

    let id = employeeId.value;

    verifyDeleteId(id);

    if(deleteCampos.id) {

        if(localStorage.getItem("token")){
            axios({
                method: "DELETE",
                url: "http://localhost:3000/employee/" + id,
                data: {
                    idEmpleado: id
                },
                headers:{
                    'Authorization': "bearer " + localStorage.getItem("token")
                }
            }).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
    
        } else {
            window.location.href ="index.html";
        }

    } else {
        e.preventDefault();
    }

    
});

const verifyDeleteId = (id) => {
    if(deleteRegEx.id.test(id)) {
        employeeId.style.border = "2px solid #4bb543";
        deleteCampos.id = true;
    } else {
        employeeId.style.border = "2px solid #cc0000";
        deleteCampos.id = false;   
    }
}