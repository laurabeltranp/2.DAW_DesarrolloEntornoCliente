function calcular(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operacion").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var resultado;

    switch (operacion){
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 !== 0){
                resultado = num1 / num2;
            } else {
                 resultado = "No se puede dividir por 0";
            }
            break;
    }
    document.getElementById("resultado").textContent = resultado;
    
}