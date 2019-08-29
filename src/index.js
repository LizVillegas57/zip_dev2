import './components/header/header.js';
import './components/questions/questions.js';
import './styles/app.scss';

const template = document.createElement('template');

template.innerHTML = `
  <zip-header></zip-header>
  <zip-questions />
`;

class App extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('my-app', App);
