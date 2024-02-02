import './app.element.css';
import * as styles from './styles.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
          <p class="${styles.withTokenFunction}">This is a text using the token function. it should be purple</p>
          <p class="${styles.withTokenString}">This is a text using the token string. it should be purple</p>
      </div>
    </div>
      `;
  }
}
customElements.define('panda-nx-root', AppElement);
