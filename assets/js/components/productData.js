export const productData =`
<article class="product">
<header class="product-header">
  <button aria-label="cerrar ventana del producto" class="product-closeBtn">
    &#128473;
  </button>
  <h2 class="product-title">${nameProduct}</h2>
</header>
<figure class="product-imgContainer">
  <img class="product-img" src="${image}" alt="${nameProduct}">
</figure>
<p class="product-description">
  ${productDescription}
<p class="product-extraData">
  <span>Observaciones:</span>
  ${dataExtra}
</p>
<span class="product-price">${productPrice}</span>
<span class="product-type">${productType}</span>
<button class="product-buyBtn" aria-label="Agregar producto al carrito de compras">Add shoppingCard</button>
<div class="product-additionalInfo">
  <span class="product-favorite" title="Agregar a lista de deseos">&#128150;</span>
  <span class="product-more">&#128214;</span>
</div>
</article>`;