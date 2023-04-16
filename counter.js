export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  //inicializa el agregando el texto con el numero inicial
  setCounter(0)
  
  element.addEventListener('click', () => setCounter(counter + 1))
}
