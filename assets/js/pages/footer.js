export const contentFooter = `
<footer class="footer">
<form id="newsletter"  class="footer-form" action="" method="get">
  <p class="footer-info">Suscríbete a nuestro boletín semanal para estar actualizados con nuestras ofertas y nuevos producto</p>
  <div class="footer-newsletter">
    <input class="footer-response" type="email" placeholder="Ingresa tu correo" name="email">
    <input class="footer-submitResponse" type="submit" value="Enviar">
  </div>
  <div class="footer-conditionsBlock">
    <input class="footer-conditionCheck" id="conditions" type="checkbox" name="textBoletin" value="true">
    <label class="footer-conditions" for="conditions">
      <a  id="conditions" class="footer-seeConditions" href="./assets/partials/404/404.html" target="_blank" aria-label="Ver términos y condiciones">Aceptar la política de tratamientos de datos</a>
    </label>
  </div>
</form>
<div class="socialMedia">
  <div class="socialMedia-title">
  Síguenos en:
  </div>
  <a class="socialMedia-link" href="https://github.com/WanderleeDev" target="_blank" aria-label="Ir al github del autor">
    <svg fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  </a>
  <a class="socialMedia-link" href="https://www.linkedin.com/in/wanderlee-max/" target="_blank" aria-label="Ir al LinkedIn del autor">
    <svg  fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>
  </a>
  <a class="socialMedia-link" href="./assets/partials/404/404.html" target="_blank" aria-label="Ir facebook del sitio web">
    <svg class="socialMedia-icon" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
  </a>
  <a class="socialMedia-link" href="./assets/partials/404/404.html" target="_blank" aria-label="Ir a telegram del sitio web">
    <svg  fill="currentColor" class="socialMedia-icon" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
    </svg>
  </a>
</div>

<ul id="about" class="footer-list">
  <li class="footer-listItem">
    <label for="accordionToggle" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Atención al cliente</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ir a preguntas frecuentes">Preguntas frecuentes</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Políticas de cambios y devoluciones">Cambios y devoluciones</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ver coberturas">Coberturas</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Servicios post venta">Post Venta</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle2" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Sobre nosotros</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle2">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="¿Quienes somos?">¿Quienes somos?</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ver ubicación de nuestras sedes>Nuestras sede"s</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ir a blog web">Blog</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ver lista de actualizaciones">Actualizaciones</a>
      </li>
    </ul>
  </li>
  <li class="footer-listItem">
    <label for="accordionToggle3" class="footer-accordionHead">
      <h3 class="footer-accordionTitle">Tratamientos de datos</h3>
    </label>
    <input class="footer-accordionHeadToggle" type="checkbox" id="accordionToggle3">
    <ul class="footer-accordionBody">
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank aria-label="Ver términos de privacidad">Privacidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ver sección de accesibilidad">Accesibilidad</a>
      </li>
      <li class="footer-accordionItem">
        <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ver términos y condiciones">Términos y condiciones</a>
      </li>
    </ul>
  </li>
  </ul>
  <p class="footer-copyright">Copyright</p>
</footer>
`