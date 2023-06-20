function cargarContenido(opcion) {
    const cargaDiv = document.querySelector('.carga');

    // Eliminar contenido anterior
    cargaDiv.innerHTML = '';

    // Cargar contenido según la opción seleccionada
    if (opcion === 'resolucion-alcaldia') {
        cargaDiv.innerHTML = '<p>Contenido de Resolución de Alcaldía</p>';
    } else if (opcion === 'decretos-alcaldia') {
        cargaDiv.innerHTML = '<p>Contenido de Decretos de Alcaldía</p>';
    } else if (opcion === 'resolucion-gerencia') {
        cargaDiv.innerHTML = '<p>Contenido de Resolución de Gerencia</p>';
    } else if (opcion === 'acuerdos-consejo') {
        cargaDiv.innerHTML = '<p>Contenido de Acuerdos de Consejo</p>';
    } else if (opcion === 'ordenanzas-municipales') {
        cargaDiv.innerHTML = '<p>Contenido de Ordenanzas Municipales</p>';
    } else if (opcion === 'contratacion-publica') {
        cargaDiv.innerHTML = '<p>Contenido de Contratación Pública</p>';
    }
}
