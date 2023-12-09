<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Situaciones</title>
    <link rel="stylesheet" href="estilo.css">
    <script src="situaciones.js" defer></script>
</head>
<body>

<div id></div>
<div id="botonAnterior"></div>
<div id="botonSiguiente2"  ></div>

<div id="cabecero"></div>

<div id="imagenEscena" >
    
    <div id="botonSiguiente"></div>
    <div id="texto"></div>

</div>
<div id="situaciones">


</div>
<?php
    // Incluye el archivo contarCarpetas.php
    include 'contarCarpetas.php';
    
    // Define la ruta del directorio
    $rutaDirectorio = './elementos'; // Cambia la ruta según tu directorio
    
    // Llama a la función contarCarpetas
    $numeroDeCarpetas = contarCarpetas($rutaDirectorio);
    
   // echo "<h1>Número de carpetas: $numeroDeCarpetas</h1>";
    ?>
    <script>
        var numeroDeCarpetasJS = <?php echo $numeroDeCarpetas; ?>;
        agregarSituacion(numeroDeCarpetasJS);
    </script>
</body>
</html>