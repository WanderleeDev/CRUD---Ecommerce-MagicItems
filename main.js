import './assets/scss/style.scss'
import { datos } from "./assets/js/calldata"; //json exportado
import { addHtmlBlock } from "./assets/js/utility/addHtmlBlock";  //agrega bloques de código HTML
import { contentHeader } from "./assets/js/pages/header.js"; //contenido header
import { unfoldMenu } from "./assets/js/listener/unfoldMenu.js";
import { contentFooter } from "./assets/js/pages/footer.js";


//header agregado
addHtmlBlock(contentHeader,'body','start'); 
const btnMenu = document.querySelector('#btnMenu');

const linksMenu =document.querySelectorAll('.headerPage-link');

linksMenu.forEach(link => {
  link.tabIndex= -1;
}); 

btnMenu.addEventListener('click', unfoldMenu);

//footer agregado
addHtmlBlock(contentFooter,'#app','after'); 

























//nofollow = para redirecciones a sitios externos a mi web, el motor de búsqueda nos seguirá ese enlace.

//noopener= permite que la nueva pestaña o ventana no tenga acceso al objeto window.opener, que puede ser entrada a ataques malintencionados.

//noreferrer= evita el envió de información extra (pag web visitadas termino de búsqueda etc) del navegador al sitio web protegiendo la identidad del usuario

//referrerpolicy="no-referrer" : evita que envié información en la cabecera al sitio direccionado , no le dice desde donde ingreso el usuario.