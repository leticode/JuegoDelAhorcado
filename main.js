function comprarEntradas() {
    let edad = prompt("Ingrese su edad");
    
    while (isNaN(edad) || Number(edad) <= 0) {
        edad = prompt("Por favor, ingrese un número entero válido para su edad");
    }
    edad = Number(edad);

    if (edad < 18 ){
        alert("No tenes la edad suficiente para ver la pelicula");
    }
    else{
        const precioEntrada = 300;
        const cantidadEntrada = parseInt(prompt("Ingresa la cantidad de entradas que necesites"));
        const total = precioEntrada * cantidadEntrada;
        
        for (let i = 0; i < cantidadEntrada; i++){
            console.log(`Imprimiendo entrada ${i + 1}`);
        }
        console.log(`Cantidad de entradas es : ${cantidadEntrada} y el total es : $${total}`);
    }
}

comprarEntradas();