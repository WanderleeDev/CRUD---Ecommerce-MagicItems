const url = './DB/magicItems.json'

export const datos = fetch(url)
.then( response => response.json())
.then(data=> data)
.catch(error =>{
  console.error('Error al obtener datos', error);
});