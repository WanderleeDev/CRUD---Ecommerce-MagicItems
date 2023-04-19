import banner from '../../images/banner/banner.png'

export const contentHeader = `
<header class="headerPage">
      <nav class="headerPage-navbar">
        <div class="headerPage-containerLogo">
          <img class="headerPage-logo" src="#" alt="title page">
        </div>
        <ul class="headerPage-navigationList">
          <li class="headerPage-li"><a class="headerPage-link" href="#">lista1</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">lista1</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">lista1</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">lista1</a></li>
        </ul>
      </nav>
      <div class="headerPage-banner">
        <h1 class="headerPage-pageTitle">Items Magic</h1>
        <img src="${banner}">
      </div>
    </header>
`;