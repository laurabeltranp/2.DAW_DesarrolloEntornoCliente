function sumar (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var resultado = num1 + num2;

    document.getElementById("resultado").textContent = resultado;
}