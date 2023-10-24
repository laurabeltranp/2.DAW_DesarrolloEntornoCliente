function verificarUsuario(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "pepe" && password === "1234"){
        document.getElementById("mensaje").textContent = "usuario y contraseña correcto";
    } else {
        document.getElementById("mensaje").textContent = "El usuario o la contraseña son erroneas";
    }
}