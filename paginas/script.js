// /paginas/scrip.js

document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.querySelector(".btn-whatsapp");
  
    if (whatsappButton) {
      whatsappButton.addEventListener("click", function(e) {
        console.log("El botón de WhatsApp fue clickeado");
        // Aquí puedes agregar otras funcionalidades, por ejemplo, animaciones o tracking.
        // Como el enlace ya está configurado para abrir en una nueva pestaña, no es necesario llamar a window.open,
        // pero si deseas personalizar la acción, puedes hacerlo:
        // e.preventDefault();
        // window.open(whatsappButton.href, "_blank");
      });
    }
  });
  