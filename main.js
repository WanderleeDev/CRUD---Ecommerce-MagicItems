import './assets/scss/style.scss'
import { datos } from "./assets/js/calldata"; //json exportado
import { addHtmlBlock } from "./assets/js/utility/addHtmlBlock";  //agrega bloques de código HTML
import { createMultiTag } from "./assets/js/utility/createMultiTag";
import { contentHeader } from "./assets/js/pages/header.js"; //bloque de código header





addHtmlBlock(contentHeader,'#app','start'); //header agregado

















//nofollow = para redirecciones a sitios externos a mi web, el motor de búsqueda nos seguirá ese enlace.

//noopener= permite que la nueva pestaña o ventana no tenga acceso al objeto window.opener, que puede ser entrada a ataques malintencionados.

//noreferrer= evita el envió de información extra (pag web visitadas termino de búsqueda etc) del navegador al sitio web protegiendo la identidad del usuario

//referrerpolicy="no-referrer" : evita que envié información en la cabecera al sitio direccionado , no le dice desde donde ingreso el usuario.