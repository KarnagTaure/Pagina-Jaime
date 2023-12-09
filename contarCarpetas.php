<?php
function contarCarpetas($ruta) {
    $contadorCarpetas = 0;
    
    // Abre el directorio
    if ($gestor = opendir($ruta)) {
        while (false !== ($entrada = readdir($gestor))) {
            // Excluye las referencias a directorios padre y directorio actual
            if ($entrada != "." && $entrada != "..") {
                $rutaCompleta = $ruta . '/' . $entrada;
                // Verifica si es un directorio
                if (is_dir($rutaCompleta)) {
                    $contadorCarpetas++;
                }
            }
        }
        closedir($gestor);
    }
    
    return $contadorCarpetas;
}
?>