export function addHtmlBlock(content, target, position = 'end') {
  const targetElement = document.querySelector(target);
  switch (position) {
    case 'end':
      targetElement.insertAdjacentHTML('beforeend', `${content}`);
      break;
    
    case 'start':
      targetElement.insertAdjacentHTML('afterbegin', `${content}`);
      break;
    
    case 'before':
      targetElement.insertAdjacentHTML('beforebegin', `${content}`);
      break;
    case 'after':
      targetElement.insertAdjacentHTML('afterend', `${content}`);
      break;

    default:
      throw new Error('valor invalido, valores válidos son (end, start, before y after)');
  }
}

// end (dentro del elemento, al final)
// start (dentro del elemento, al principio)
// before (dentro del elemento al final)
// after (después del elemento)