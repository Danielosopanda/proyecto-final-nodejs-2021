const   searchForm = document.querySelector("#searchForm"),
        searchBar = document.querySelector("#searchBar");

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
        
        console.log(employeeName);
        console.log(apellidos)
        
        axios({
            method: "GET",
            url: `http://localhost:3000/employee/${employeeName}`,
            data: {
                apellidosEmpleado: apellido
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

    } else {
        window.location.href = "login.html";
    }

    

    e.preventDefault();

})
