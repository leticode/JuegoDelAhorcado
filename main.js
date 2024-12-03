
function comprarEntradas() {
    const edad = parseInt(prompt("Ingresa tu edad"));
    if (edad < 18){
        alert(`No podes ingresar a ver la pelicula`);
        return;
    }
    const precioEntrada = 300;
    const cantidadEntradas = parseInt(prompt("ingrese la cantidad de entrada que queres"));
    const total = cantidadEntradas * precioEntrada;
    for (let i = 0 ; i < cantidadEntradas; i++) {
        console.log(`imprimiendo entrada ${i + 1}`);
    }
    console.log(`cantidad de entradas : ${cantidadEntradas}, total : $${total}`);
}

comprarEntradas();