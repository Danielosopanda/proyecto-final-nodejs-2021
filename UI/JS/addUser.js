const   addBtn = document.querySelector("#btnAdd"),
        cancelBtn = document.querySelector("#cancelAdd"),
        form = document.querySelector("#addEmployeeForm"),
        container = document.querySelector("#container");

var hidden = true;

addBtn.addEventListener("click", () => {
    if(hidden) {        
        form.style.visibility = "visible";
        container.style.filter = "blur(4px)";
        form.style.display = "block";
        hidden = false;
    } 
});

cancelBtn.addEventListener("click", () => {
    if(!hidden) {
        form.style.visibility = "hidden";
        container.style.filter = "none";
        form.style.display = "none";
        hidden = true;
    }
});