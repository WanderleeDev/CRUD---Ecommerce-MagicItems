export const contentHeader = `
    <header class="headerPage">
      <nav class="headerPage-navbar">
        <div class="headerPage-containerLogo">
          <img class="headerPage-logo" src="#" alt="title page">
        </div>
        <button id="btnMenu" class="headerPage-btnMenu">
          <svg class="headerPage-btnSvg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </button> 
        <div class="headerPage-searchBar">
          <label class="headerPage-labelSearch">
            <svg class="headerPage-searchIcon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
          </label>
          <input class="headerPage-searchInput" type="search">
        </div>
        <a class="headerPage-loginLink"  href="#">
          <svg class="headerPage-loginIcon"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>        
        </a>
        <ul id="menu" class="headerPage-menu">
          <li class="headerPage-li"><a class="headerPage-link" href="https://www.google.com">Home</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">Products</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">About</a></li>
          <li class="headerPage-li"><a class="headerPage-link" href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="headerPage-banner">
        <h1 class="headerPage-pageTitle">Items Magic</h1>
      </div>
    </header>
`;