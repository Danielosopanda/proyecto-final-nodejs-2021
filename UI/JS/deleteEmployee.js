var headers={};
const   deleteForm = document.querySelector("#deleteEmployeeForm"),
        employeeId = document.querySelector("id");

       
deleteForm.addEventListener("submit",(e)=>{
    let id = employeeId.value;
    if(localStorage.getItem("token")){
        axios({
            method :"DELETE",
            url : "http://localhost:3000/employee/",
            data :{
                idEmpleado: id
            },
            headers:{
                'Authorization': "bearer "+localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }else{
        window.location.href ="index.html";
    }
});
