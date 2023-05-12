import { datos } from "@/js/calldata"; //json exportado
import { galleryItem } from "@/js/components/galleryItem.js";
import { simpleCard } from "@/js/components/simpleCard.js";

export const main = ()=>{
  
  datos.then(datos => {

    const icons = datos.icons; //datos usados para galleryItem
    const nodo = document.createDocumentFragment(); //Nodo externo contenedor
    const products = datos.products; //datos de cada producto
    
    for (let i = 0; i < icons.length; i++) {
      const img = icons[i].img;
      const titleIcon = icons[i].title;

      const altText = icons[i].altText
      const gallery = galleryItem(img, titleIcon, altText);
      const dataTag = document.createElement('section');
    
      console.log('check');
      dataTag.innerHTML= gallery;
      dataTag.classList.add('homeItem')
      nodo.appendChild(dataTag); 

      for (const product in products) {
        if (Object.hasOwnProperty.call(products, product)&& products[product]) {
          const element = products[product];
          element.forEach(e => {
            return console.log(e);
          });
          
        }
      }
      console.log('check');
    }
    const objetivo = document.querySelector('#app');
    objetivo.append(nodo);
    
  })
} 

//console.log(simpleCard);