export const unfoldMenu = ()=>{
  const menuMobile =document.querySelector('#menu');

  //desplegamos menu mobile
  menuMobile.classList.toggle('menu--open');

  const isOpen = menuMobile.classList.contains('menu--open');

  const linksMenu =document.querySelectorAll('.headerPage-link');

  if (!isOpen) {
    linksMenu.forEach(e => {
      e.tabIndex = -1;
      e.style.pointerEvents='none';
      e.classList.remove('link-opacity-1');
    });
  }else{
    linksMenu.forEach(e => {
      e.tabIndex = 0;
      e.style.pointerEvents='auto';
      e.classList.add('link-opacity-1');
    });
  }
}
