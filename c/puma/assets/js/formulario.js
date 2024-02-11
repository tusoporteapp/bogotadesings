function enviarPedido() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var talla = document.getElementById("talla").value;

    // Construir el mensaje de WhatsApp
    var mensaje = "Pedido:\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Apellido: " + apellido + "\n";
    mensaje += "Dirección: " + direccion + "\n";
    mensaje += "Talla: " + talla;

    // Codificar el mensaje para ser enviado a través de WhatsApp
    var encodedMensaje = encodeURIComponent(mensaje);

        // Crear el enlace de WhatsApp con el mensaje
        var enlaceWhatsApp = "https://wa.me/573232287550?text=" + encodedMensaje;

   // Redirigir a WhatsApp
    window.location.href = enlaceWhatsApp;
}