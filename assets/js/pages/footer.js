export const contentFooter = `
<footer class="footer">
<form  class="footer-form" action="" method="get">
  <p class="footer-info">Suscríbete a nuestro boletín semanal para estar actualizados con nuestras ofertas y nuevos producto</p>
  <div class="footer-newsletter">
    <input class="footer-response" type="email" placeholder="Ingresa tu correo" name="email">
    <input class="footer-submitResponse" type="submit" value="Enviar">
  </div>
  <div class="footer-conditionsBlock">
    <input class="footer-conditionCheck" id="aceptar" type="checkbox" name="textBoletin" value="true">
    <label class="footer-conditions" for="conditions">
      <a  id="conditions" class="footer-seeConditions" href="">Aceptar la política de tratamientos de datos</a>
    </label>
  </div>
</form>
<div class="socialMedia">
  <a class="socialMedia-link">
    <img class="socialMedia-icon" src="https://www.dropbox.com/s/zuk19my5twntug3/github.svg? " rel="Github">
  </a>
  <a class="socialMedia-link">
    <img class="socialMedia-icon" src="https://www.dropbox.com/s/xb806hyl1kjy4cj/linkedin.svg?r" rel="linkedIn">
  </a>
  <a class="socialMedia-link">
    <img class="socialMedia-icon" src="" rel="facebook">
  </a>
  <a class="socialMedia-link">
    <img class="socialMedia-icon" src="" rel="Instagram">
  </a>
</div>
<ul class="footer-list">
  <li class="footer-listItem">
    <label for="accordionToggle" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Atención al cliente</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">Preguntas frecuentes</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Cambios y devoluciones</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Coberturas</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Post Venta</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle2" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Atención al cliente</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle2">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">¿Quienes somos?</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Nuestras sedes</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Blog</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Actualizaciones</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle3" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Atención al cliente</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle3">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="">Privacidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Accesibilidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="">Términos y condiciones</a>
      </li>
    </ul>
  </li>
  <li class="footer-copyright">Copyright</li>
</ul>
</footer>
`