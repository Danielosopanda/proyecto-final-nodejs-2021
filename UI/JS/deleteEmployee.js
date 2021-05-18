const   acceptDelete = document.querySelector("#acceptDelete"),
        cancelDelete = document.querySelector("#cancelDelete"),
        deleteForm = document.querySelector("#deleteEmployeeForm"),
        scontainer = document.querySelector("#container");

const delBtns = document.querySelectorAll(".removeEmployee");

var hidden = true;

delBtns.forEach(btn => {
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

acceptDelete.addEventListener("click", () => {

    axios({
        method: "DELETE",
        url: "http://localhost:3000/employee",
        data: {

        }
    });

});