function calcularPrecio(){
    const tamañoPizza = document.querySelector('input[name="tamaño"]:checked');
    const ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');

    if(!tamañoPizza){
        alert("Debe seleccionar un tamaño");
        return;
    }
    if (ingredientes.length == 0){
        alert("Debes seleecionar mínimo un ingrediente")
        return;
    }

    let precioBase;
    switch (tamañoPizza.value){
        case "pequeña":
            precioBase = 5;
            break;
        case "mediana":
            precioBase = 10;
            break;
        case "grande":
            precioBase = 15;
            break;
        default:
            break;
    }
    const precioIngredientes = ingredientes.length;
    const precioTotal = precioBase + precioIngredientes;

    document.getElementById('totalPedido').textContent = precioTotal + '€';
}