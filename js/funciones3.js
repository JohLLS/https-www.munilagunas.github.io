function cargarContenido(opcion) {
    const cargaDiv = document.querySelector('.carga');

    // Eliminar contenido anterior
    cargaDiv.innerHTML = '';

    // Cargar contenido según la opción seleccionada
    if (opcion === 'oficina-general-administracion') {
        cargaDiv.innerHTML = '<p>Contenido de Oficina General de Administración</p>';
    } else if (opcion === 'gerencia-desarrollo-social') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Desarrollo Social</p>';
    } else if (opcion === 'gerencia-desarrollo-terrotorial') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Desarrollo Territorial y Tecnológico</p>';
    } else if (opcion === 'gerencia-administracion-tributaria') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Administración Tributaria</p>';
    } else if (opcion === 'gerencia-gestion-ambiental') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Gestión Ambiental</p>';
    } else if (opcion === 'gerencia-desarrollo-economico') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Desarrollo Económico</p>';
    } else if (opcion === 'gerencia-seguridad-ciudadana') {
        cargaDiv.innerHTML = '<p>Contenido de Gerencia de Seguridad Ciudadana</p>';
    }
}
