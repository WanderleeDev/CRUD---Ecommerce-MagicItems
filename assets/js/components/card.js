import '../../scss/components/card.scss';
export const cardItem = `
<div class="card">
      <figure class="card-imgContainer">
        <img class="${image}" alt="objeto en venta">
        <a class="card-link" href="#" title="ver mas a detalle">
          👁️‍🗨️
        </a>
      </figure>
      <article class="card-content">
        <header class="card-header">
          <h2 class="card-title">
            ${nameItem}
          </h2>
          <img class="card-itemLevel" src="${levelIcon}" alt="nivel">
        </header>
        <div class="card-shop">
          <span class="card-price">${price}</span>
          <div class="card-btnsBuy">
            <button id="btnAdd" aria-label="agregar item" class="card-btn" type="button">&#43;</button>
            <span class="card-numberArticles">0</span>
            <button id="btnRemove" aria-label="remover item" class="card-btn" type="button">&#8722;</button>
          </div>
        </div>    
        <div class="card-extraData">
          <spam title="guardar en lista de deseos" class="card-favorite">
            &#128150;
          </spam>
          <span class="card-moreData">
            &#128179;
          </span>
          <button class="card-addCartBtn">
            add to cart
          </button>
        </div>

      </article>
    </div>`;