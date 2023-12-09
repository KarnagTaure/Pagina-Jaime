const contenedorPadre = document.getElementById("situaciones");
const imagenEscenaDiv = document.getElementById("imagenEscena");
const botonSiguiente = document.getElementById("botonSiguiente2");
const imagenEscena = document.getElementById("imagenEscena");
const botonAnterior = document.getElementById("botonAnterior");
const texto = document.getElementById("texto");

var nuevaImg='';
var numMax = "";
var situacionNumID = 1;
var escenaNumero = 0; // Inicializa con la primera escena
var escenaActual = '1';

// Función para generar la URL de la imagen de fondo
function obtenerUrlImagen(indice) {
  return `url(./elementos/materiales/materiales-app_ex_s${indice}.png)`;
}

// Función para cambiar la imagen al pasar el ratón sobre el elemento
function cambiarImagenAlEntrar() {
  const clicado = this.dataset.clicado === "true";

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado
    const imagenOriginal = this.style.backgroundImage;

    // Construye la nueva URL con "_on" antes de ".png"
    const nuevaImagen = imagenOriginal.replace(".png", "_on.png");
    

    // Establece la nueva imagen de fondo
    this.style.backgroundImage = nuevaImagen;
    
  }
}

// Función para restaurar la imagen original al salir del elemento
function restaurarImagenAlSalir() {
  const clicado = this.dataset.clicado === "true";

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado
    const imagenOriginal = this.style.backgroundImage;

    // Restaura la imagen original eliminando "_on" antes de ".png"
    const imagenRestaurada = imagenOriginal.replace("_on.png", ".png");

    // Establece la imagen de fondo original
    this.style.backgroundImage = imagenRestaurada;
  }
}

// Función para cambiar la imagen al hacer clic
function cambiarImagenAlClic() {
  // Busca el div anteriormente clicado por su clase 'clicado'
  const anteriorBoton = document.querySelector('.clicado');

//Mira si hay anteriror clicado y si el clicado no es el que ahora clicamos
  if (anteriorBoton && anteriorBoton !== this) {
    // Si hay un div anteriormente clicado y no es el mismo, restaura su imagen y clase
    const imgCambiada = anteriorBoton.style.backgroundImage.replace('_on.png', '.png');
    anteriorBoton.style.backgroundImage = imgCambiada;//cambia la imagen
    anteriorBoton.classList.remove('clicado');//Quita la clase
    anteriorBoton.classList.add('situacion');//Añade la clase
    anteriorBoton.dataset.clicado = 'false';//cambia el booleano clicado
  }

  // Obtiene el valor del atributo data-clicado
  const clicado = this.classList.contains('clicado');

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado del elemento clicado
    const imagenOriginal = this.style.backgroundImage;

    // Como imagenOriginal al clicarla con el raton y 
    //este al estar encima cambia la imagen no hace falta cambiar la terminacion de la url
    const nuevaImg = imagenOriginal;

    // Establece la nueva imagen de fondo y clase para el div actual
    this.style.backgroundImage = nuevaImg;
    
     this.classList.add('clicado');//Cambia el nombre de la clase
   

    // Establece el atributo data-clicado a trues
    this.dataset.clicado = 'true';
  } else {
    // Si ya estaba clicado, restaura la imagen y clase original
    const imgCambiada = this.style.backgroundImage.replace('_on.png', '.png');
    this.style.backgroundImage = imgCambiada;
    this.classList.remove('clicado');
    this.classList.add('situacion');

    // Establece el atributo data-clicado a false
    this.dataset.clicado = 'false';
  }

  // Actualiza el contenido de algún elemento con el ID 'texto' (deberías tener este elemento en tu HTML)
  texto.innerHTML = this.classList.contains('clicado') ? 'Clicado' : 'No Clicado';
}
 

// crear div de Situaciones según la cantidad que haya
function agregarSituacion(num) {
  // Bucle para crear y agregar los divs
  for (let i = 0; i < num; i++) {
    if (i > 0) {
      // Crea un nuevo elemento div
      const nuevoDiv = document.createElement("div");

      // Agrega una clase al nuevo div (opcional, pero útil para estilos)
      nuevoDiv.classList.add("situacion");
      nuevoDiv.id = situacionNumID;
      situacionNumID++;

      // Genera la URL de la imagen de fondo según algún patrón
      const urlImagen = obtenerUrlImagen(i);

      // Agrega imagen de fondo
      nuevoDiv.style.backgroundImage = urlImagen;

      // Establece el atributo data-clicado a false
      nuevoDiv.dataset.clicado = "false";

      // Agrega eventos para cambiar y restaurar la imagen al pasar el ratón
      nuevoDiv.addEventListener("mouseenter", cambiarImagenAlEntrar);
      nuevoDiv.addEventListener("mouseleave", restaurarImagenAlSalir);

      // Agrega evento para cambiar la imagen al hacer clic

      nuevoDiv.addEventListener("click", cambiarImagenAlClic);
      nuevoDiv.addEventListener("click", clicEnNumeroEscena);

      // Agrega el nuevo div al contenedor padre
      contenedorPadre.appendChild(nuevoDiv);
    }
  }
}

// Función para cargar la primera imagen de la escena actual
function cargarPrimeraImagen(escena) {
  escenaNumero = 0;
  const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
  imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
  //texto.innerHTML= escena+" "+escenaNumero+urlImagen;
}
function numeroMax(escena){
  switch (escena) {
    case '1':
      numMax = 4;
      break;
    case '2':
      numMax=4;
      break;
    case '3':
      numMax = 4;
      break;
    case '4':
      numMax=4;
      break;
    case '5':
      numMax = 5;
      break;
    case '6':
      numMax=5;
      break;
    case '7':
      numMax = 4;
      break;
    case '8':
      numMax=4;
      break;
    case '9':
      numMax = 4;
      break;
    case '10':
      numMax=4;
      break;
    case '11':
      numMax = 4;
      break;
    case '12':
      numMax=3;
      break;
    case '13':
      numMax=5;
      break;
default:
  numMax= 5;
  break;
    
  }
}
// Función para cambiar a la siguiente imagen de la escena actual
function clickSiguienteIMG(escena) {
  numeroMax(escenaActual);
  if (escenaNumero < numMax) {
    escenaNumero++;

    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
    
      imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;

      texto.innerHTML= escena+" "+escenaNumero+urlImagen +'/n'+ numMax;
    
  }else{
    
    escenaNumero=1;
    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
    
      
      imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
    }
}
function clickAnteriorIMG(escena) {
  if (escenaNumero > 0) {
    escenaNumero--;
    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
    if (urlImagen) {
      imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;

      // texto.innerHTML= escena+" "+escenaNumero+urlImagen;
    }
  }
}
// Función para manejar el clic en un número de escena
function clicEnNumeroEscena() {
  escenaActual = this.id;
  
  cargarPrimeraImagen(escenaActual);
  
}

// Ejecuta tus funciones cuando el DOM esté listo
document.addEventListener(
  "DOMContentLoaded",
  agregarSituacion(numeroDeCarpetasJS)
);
botonSiguiente.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  
  clickSiguienteIMG(escenaActual);
});
imagenEscena.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  clickSiguienteIMG(escenaActual);
});
botonAnterior.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  clickAnteriorIMG(escenaActual);
});
window.onload = cargarPrimeraImagen(escenaActual);
