
import '@/scss/components/gallery.scss';
import { simpleCard } from "@/js/components/simpleCard.js";
//debe ser contenido por un section
export const galleryItem = (img, title, altText)=>{
  const card =simpleCard(img,title);
  
  return ` 
	<header class="homeItem-header">
	  <img class="homeItem-icon" src="${img}" alt="${title}" loading="lazy">
	  <h2 class="homeItem-title">${title}</h2>
    </header>
    <div class="homeItem-body">
    ${card}
    <div class="homeItem-card">
      <a class="homeItem-link" aria-label="${altText}" href="#" title="${altText}">
        <svg class="homeItem-icon" viewBox="0 0 24 24"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 11H8V13H11V16H13V13H16V11H13V8H11V11Z"></path></svg>
      </a>
    </div>
  </div>`;
};