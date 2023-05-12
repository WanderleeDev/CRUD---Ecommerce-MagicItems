import '@/scss/style.scss';
import { addHtmlBlock } from "@/js/utility/addHtmlBlock";  //agrega bloque de código HTML
import { createMultiTag } from "@/js/utility/createMultiTag.js";
import { contentHeader } from "@/js/pages/header.js"; //contenido header
import { unfoldMenu } from "@/js/listener/unfoldMenu.js";
import { main} from "@/js/pages/main.js"; //contenido main
import { contentFooter } from "@/js/pages/footer.js"; //contenido footer
import { observerTarget } from "@/js/utility/observerTarget.js";//API intersectionObserve

//header agregado
addHtmlBlock(contentHeader,'body','start'); 
const btnMenu = document.querySelector('#btnMenu');
const linksMenu =document.querySelectorAll('.headerPage-link');
const navbar = document.querySelector('.headerPage-navbar');

linksMenu.forEach(link => {
  link.tabIndex= -1;
}); 
btnMenu.addEventListener('click', unfoldMenu);



//Contenido main
main();


//espera a que cargue todo el contenido del DOM
window.onload = ()=>{
  //aplicación del IntersectionObserver
  observerTarget('.homeItem-title', { displayTitle: true });
}

//footer agregado
addHtmlBlock(contentFooter,'#app','after'); 