function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza
}
    var p1 = pizzaOven("Estilo Chicago", "Tradicional", ["Mozarella"], ["Pepperoni", "Salchicha"])
    console.log("Nuestra pizza número 1 contiene:", p1);

    var p2 = pizzaOven("Lanzada a Mano", "Marinara", ["Mozarella", "Feta"], ["Champiñones", "Aceitunas", "Cebollas"])
    console.log("Nuestra pizza número 2 contiene:", p2);

    var p3 = pizzaOven("Napolitana", "Pesto", ["Mozarella"], ["Pollo, Cebolla, Choclo, Aceitunas"])
    console.log("Nuestra pizza número 3 contiene:", p3);

    var p4 = pizzaOven("Romana", "Tradicional", ["Bufala"], ["Salame Picante", "Ruccula", "Albahaca", "Berenjena"])
    console.log("Nuestra pizza número 4 contiene:", p4);

    console.log("¡Disfruten de sus pizzas!");