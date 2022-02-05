class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <div class="logo"><a href="index.html"><img src="images/logo.svg" /></a> UI</div>
      <ul>
        <li>
          <a href="https://github.com/kiranbabu7"
            ><img src="images/github.svg"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kiran-babu-51247a142/"></a
          ><img src="images/linkedin.svg" />
        </li>
        <li>
          <a href="https://twitter.com/Kiran_Babu_v"
            ><img src="images/twitter.svg"
          /></a>
        </li>
      </ul>
    </header>
          `;
  }
}

//Footer

class SideMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       
  
        `;
  }
}

customElements.define("main-header", Header);
customElements.define("side-menu", SideMenu);
