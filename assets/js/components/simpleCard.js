export const simpleCard = (img,title)=>{
  return `
  <figure class="homeItem-card">
    <img class="homeItem-imgProduct" src="${img}" alt="${title}">
    <figcaption class="homeItem-productTitle">${title}</figcaption>
  </figure>`;
}