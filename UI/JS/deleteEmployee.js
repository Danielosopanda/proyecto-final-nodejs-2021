const   acceptDelete = document.querySelector("#acceptDelete"),
        cancelDelete = document.querySelector("#cancelDelete"),
        deleteForm = document.querySelector("#deleteEmployeeForm"),
        scontainer = document.querySelector("#container");
    

window.addEventListener("load", () => {

    
    setTimeout(() => {

        const delBtns = document.querySelectorAll(".removeEmployee");

        var hidden = true;
        
        delBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
        
                if(hidden) {        
                    deleteForm.style.visibility = "visible";
                    container.style.filter = "blur(4px)";
                    deleteForm.style.display = "flex";
                    hidden = false;
                }
            });
        });
        
        cancelDelete.addEventListener("click", () => {
            if(!hidden) {
                deleteForm.style.visibility = "hidden";
                container.style.filter = "none";
                deleteForm.style.display = "none";
                hidden = true;
            }
        });
        
        acceptDelete.addEventListener("click", (e) => {

            if(localStorage.getItem("token")) {

                delBtns.forEach((btn, index) => {
                    /* btnId = btn.parentNode.parentNode.children[0].innerHTML; */
                    let btnId = index;
                    console.log(btnId)
                    
                    userId = delBtns[btnId].parentNode.parentNode.children[0].innerHTML;
                    console.log(userId);
                });

                
    
                axios({
                    method: "DELETE",
                    url: "http://localhost:3000/employee/" + userId,
                    data: {
                        idEmpleado: userId
                    },
                    headers: {
                        'Authorization': "bearer " + localStorage.getItem("token")
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });

                e.preventDefault()
            } else {
                window.location.href = "index.html";
            }
            
            e.preventDefault();
        });

    }, 500);
    
});
