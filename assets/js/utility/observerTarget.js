export const observerTarget = (tag, classesToAdd={},reference = null)=>{
  let targetTag = document.querySelectorAll(tag);

  if(!targetTag.length){ 
    //verifica si es cero el contenido ingresado
    throw new Error('No se encontraron elementos observables');
  } 

  /*---objeto y función de la instancia observer---*/
  const options ={
    //objeto con las opciones del observer
    root: reference,
    rootMargin: '0px',
    threshold: 0
  }
  
  //función manejar intersección
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const objetivo = entry.target;

        for (const className in classesToAdd) {
          if (classesToAdd.hasOwnProperty(className) && classesToAdd[className]) {
            objetivo.classList.add(className);
            observer.unobserve(objetivo);
          }
        }
      }
    });
  }
  /*-----------------------------------------------*/ 
  
  const observador = new IntersectionObserver(handleIntersection,options)

  targetTag.forEach(target => observador.observe(target));
}