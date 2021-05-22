const   form = document.querySelector("#logInForm"),
        emailInput = document.querySelector("#email"),
        passwordInput = document.querySelector("#password");

window.onload = () => {

    if(!localStorage.getItem("token")) {
        form.addEventListener("submit", login);
    } else {
        window.location.href = "main.html";
    }
}

const login = (e) => {

    let email = emailInput.value,
        password = passwordInput.value;
    

    axios({

        method: "POST",
        url: "http://localhost:3000/user/login",
        data: {
            correoUsuario: email,
            passwordUsuario: password
        }

    }).then(response => {
        
        if(response.data.code == 200){
            localStorage.setItem("token", response.data.message);
            window.location.href = "main.html";
        } else {
            console.log("Usuario inválido");
        }

    }).catch(error => {
        console.log(error);
    });

    e.preventDefault();

}