let edad = parseInt(prompt("Ingresa tu edad"));

function verPelicula(){
    if (edad > 18){
        console.log("podes ingresar a ver la pelicula")
    }
    else{
        console.log("no podes ingresar a ver la pelicula")
    }
}

verPelicula();