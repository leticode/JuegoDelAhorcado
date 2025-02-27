
let palabraElegida = elegirPalabraAlAzar();
let palabraQueHayQueAdivinar = palabraElegida.nombre;
let palabraElegidaDescripcion = palabraElegida.descripcion;
let ayudaPalabra = document.querySelector(".ayudaPalabra");
ayudaPalabra.textContent = palabraElegidaDescripcion;
let letraPresionada = [];
let fallos = 0;
let maximoDeFallos = 6;
crearTeclado();
actualizarPalabraAdivinada();
actualizarFallos();
let cantidadSinPerder = parseInt(localStorage.getItem("partidasSinPerder") || 0);
let contenedorPartidasSinPerder = document.querySelector(".contenedorPartidas");
contenedorPartidasSinPerder.textContent = "Partidas consecutivas sin perder: " + cantidadSinPerder;
let ultimasPalabras = JSON.parse(localStorage.getItem("ultimasPalabras") || "[]");
let contenedorUltimasPalabras = document.querySelector(".contenedorUltimasPalabras");
contenedorUltimasPalabras.textContent = "Ultimas: " + ultimasPalabras.join(", ");

function elegirPalabraAlAzar() {
    let palabras = [
        { nombre: "Tigre", descripcion: "Un felino enigmático, símbolo de poder y agilidad" },
        { nombre: "Hipopotamo", descripcion: "Un gran mamífero semiacuático conocido por su tamaño y comportamiento territorial." },
        { nombre: "Jirafa", descripcion: "Una figura elegante que observa el mundo desde las alturas" },
        { nombre: "Mariposa", descripcion: "Un insecto con alas grandes y coloridas" },
        { nombre: "Camaleon", descripcion: "Un reptil conocido por su capacidad para cambiar de color" },
        { nombre: "Delfin", descripcion: "Un viajero del mar, conocido por su curiosidad" },
        { nombre: "Ballena", descripcion: "Un mamífero marino de gran tamaño" },
        { nombre: "Elefante", descripcion: "El gigante terrestre con una memoria excepcional" },
        { nombre: "Canguro", descripcion: "Un saltador incansable que lleva su hogar consigo" },
        { nombre: "Correr", descripcion: "Un impulso que te lleva hacia adelante" },
        { nombre: "Saltar", descripcion: "Un gesto que desafía la gravedad" },
        { nombre: "Leer", descripcion: "Una forma de viajar sin moverse" },
        { nombre: "Escribir", descripcion: "Un acto de dar forma a los pensamientos" },
        { nombre: "Dormir", descripcion: "El respiro del cuerpo y la mente" },
        { nombre: "Espejo", descripcion: "Un reflejo de lo que somos, y de lo que no somos" },
        { nombre: "Mochila", descripcion: "Un compañero silencioso en el camino" },
        { nombre: "Silla", descripcion: "Un soporte que ofrece descanso al cuerpo en su constante movimiento" },
        { nombre: "Escalera", descripcion: "Una estructura usada para subir o bajar entre niveles" },
        { nombre: "Telefono", descripcion: "Un conector invisible que acorta distancias y acerca voces" },
        { nombre: "Biblioteca", descripcion: "Un refugio para aquellos que buscan respuestas" },
        { nombre: "Playa", descripcion: "El lugar donde la tierra y el mar se encuentran en silencio" },
        { nombre: "Piramide", descripcion: "Una estructura con una base cuadrada y caras triangulares." },
        { nombre: "Castillo", descripcion: "Una estructura fortificada generalmente usada en la antigüedad." },
        { nombre: "Escuela", descripcion: "Un espacio donde se cultivan las semillas del futuro" },
        { nombre: "Parque", descripcion: "Un descanso en medio del caos" },
        { nombre: "Museo", descripcion: "Un viaje al pasado, congelado en el tiempo" },
        { nombre: "Pizza", descripcion: "Un delicioso platillo italiano con masa, queso y toppings." },
        { nombre: "Sopa", descripcion: "Un alimento líquido que reconforta y nutre" },
        { nombre: "Hamburguesa", descripcion: "Un platillo rápido con carne, pan y diversos ingredientes." },
        { nombre: "Ravioles", descripcion: "Un tipo de pasta rellena, generalmente acompañada de salsa." },
        { nombre: "Empanadas", descripcion: "Un bocado lleno de tradición y sabor" },
        { nombre: "Mango", descripcion: "Fruta tropical de forma ovalada y sabor dulce, de color amarillo o verde." },
        { nombre: "Energia", descripcion: "La fuerza que impulsa las actividades de todos los días" },
        { nombre: "luna", descripcion: "El satélite natural de la Tierra" },
        { nombre: "Alegria", descripcion: "La luz que ilumina los momentos más oscuros" },
        { nombre: "Amistad", descripcion: "Un lazo que va más allá de las palabras" },
        { nombre: "Tristeza", descripcion: "La sombra que se posa en el corazón" },
        { nombre: "Paciencia", descripcion: "La calma que se encuentra en la espera" },
        { nombre: "Neurona", descripcion: "Célula del sistema nervioso encargada de transmitir impulsos eléctricos" },
        { nombre: "Pancreas", descripcion: "Órgano que se encuentra detrás del estómago y produce enzimas digestivas y hormonas, como la insulina" },
        { nombre: "Higado", descripcion: "Órgano vital que se encarga de metabolizar sustancias y producir bilis para la digestión" },
        { nombre: "Aorta", descripcion: "La arteria principal que transporta sangre oxigenada desde el corazón hacia el resto del cuerpo" },
        { nombre: "Traquea", descripcion: "Conducto respiratorio que conecta la laringe con los pulmones" },
        { nombre: "Venacava", descripcion: "Vena que transporta la sangre desoxigenada desde el cuerpo de vuelta al corazón" },
        { nombre: "Tibia", descripcion: "Hueso largo de la pierna que se encuentra en la parte inferior, entre la rodilla y el tobillo" },
        { nombre: "Sutil", descripcion: "Que es tan delicado o fino que casi no puede ser percibido" },
        { nombre: "Sereno", descripcion: "Que es tranquilo o calmado, especialmente en medio de situaciones tensas o desordenadas" },
        { nombre: "Efimero", descripcion: "Que tiene una duración muy corta, que desaparece rápidamente" },
        { nombre: "Fragil", descripcion: "Que es débil o vulnerable, fácil de romper o dañar" },
        { nombre: "Saxo", descripcion: "Instrumento de viento hecho de metal, usado en la música jazz y clásica" },
        { nombre: "Violin", descripcion: "Instrumento musical de cuerdas que se toca con un arco" },
        { nombre: "Redes", descripcion: "Conexiones entre dispositivos que permiten la transmisión de datos y la comunicación" },
        { nombre: "Internet", descripcion: "Red mundial que conecta millones de computadoras y dispositivos" },
        { nombre: "Software", descripcion: "Conjunto de programas y aplicaciones que permiten que una computadora funcione"},
        { nombre: "Abogado", descripcion: "Defiende los derechos y asesora en temas legales" },
        { nombre: "Ingeniero", descripcion: "Diseña soluciones técnicas usando ciencia y matemáticas." },
        { nombre: "Profesor", descripcion: "Guía del conocimiento que siembra ideas, habilidades y valores" },
        { nombre: "Arquitecto", descripcion: "Creador de espacios funcionales y estéticamente agradables" }
    ];
    
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    let objetoPalabra = palabras[indiceAleatorio];
    return objetoPalabra;
}

function crearTeclado() {
    let contenedorTeclado = document.querySelector(".contenedorTeclado");
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let letra of letras){
        let teclado = document.createElement("button");
        teclado.textContent = letra;
        teclado.className = "btnTeclado";
        contenedorTeclado.appendChild(teclado);
        teclado.addEventListener("click", () =>{
            if(teclado.className === "btnTeclado"){
                letraPresionada.push(letra);
                teclado.className = "presionada";
                if(palabraQueHayQueAdivinar.toLocaleLowerCase().includes(letra) === false){
                    fallos++;
                    actualizarFallos();
                }
                actualizarPalabraAdivinada();
            }
        })
    }
}

function actualizarPalabraAdivinada() {
    let palabraIntentada = "";
    for (let letra of palabraQueHayQueAdivinar){
        if(letraPresionada.includes(letra.toLocaleLowerCase())){
            palabraIntentada+= letra;
        }
        else{
            palabraIntentada+= "_";
        }
    }
    let contenedorPalabra = document.querySelector(".contenedorPalabra");
    contenedorPalabra.textContent = palabraIntentada;
    
    if (palabraIntentada === palabraQueHayQueAdivinar){
        mostrarOverlay("GANASTE !", "img/victory.gif");
        localStorage.setItem("partidasSinPerder", cantidadSinPerder + 1);
        ultimasPalabras.push(palabraQueHayQueAdivinar);
        localStorage.setItem("ultimasPalabras", JSON.stringify(ultimasPalabras));
        obtenerChiste();        
    }
}

async function obtenerChiste() {
    try {
        let respuesta = await fetch("https://v2.jokeapi.dev/joke/Any?lang=es&format=txt");
        let chiste = await respuesta.text();
        document.getElementById("chiste").textContent = chiste;
    } catch (error) {
        console.error("Error al obtener el chiste:", error);
        document.getElementById("chiste").textContent = "Error al cargar el chiste.";
    }
}


function actualizarFallos(){
    let contenedorFallos = document.querySelector(".contenedorFallos");
    contenedorFallos.textContent = "Fallos : " + fallos + " / " + (maximoDeFallos + 1);
    let hangmanImg = document.querySelector("#hangmanImg");
    if(fallos <= maximoDeFallos){
        hangmanImg.src = "img/hangman-" + fallos + ".svg";
    }
    if(fallos === maximoDeFallos){
        Swal.fire({
            title: "Te queda un ultimo intento!",
            icon: "warning",
            width: 400,
            customClass: {
                popup: 'custom-popup',
                icon: 'custom-icon',
                confirmButton: 'custom-button',
                title: 'custom-title',
            }
        });
        
    }
    if (fallos > maximoDeFallos) {
        mostrarOverlay("PERDISTE " + " la palabra era : " + palabraQueHayQueAdivinar, "img/lost.gif");
        localStorage.setItem("partidasSinPerder", 0);
        localStorage.setItem("ultimasPalabras", "[]");
    }
}

function mostrarOverlay(texto, img){
    let overlay = document.querySelector("#overlay");
    overlay.classList.add("encendido");
    let textoOverlay = document.createElement("div");
    textoOverlay.textContent = texto;
    overlay.appendChild(textoOverlay);
    
    let imagen = document.createElement("img");
    imagen.src = img;
    imagen.className = "imagenGiftCara";
    overlay.appendChild(imagen);

    let chiste = document.createElement("div");
    chiste.id = "chiste";
    overlay.appendChild(chiste);
    
    let btnOverlay = document.createElement("button");
    btnOverlay.textContent = "Volver a jugar";
    btnOverlay.className = "btnOverlay"
    overlay.appendChild(btnOverlay);
    btnOverlay.addEventListener("click", () => {
        location.reload();
    });
}


