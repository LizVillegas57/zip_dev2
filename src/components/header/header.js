customElements.define('zip-header', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        this._shadowRoot.innerHTML =
            `<style>
                header{
                    display: block;
                    text-align: center;
                    border-bottom: 100px solid #42226b;
                }
            </style>
            <header class="header">
                <img src = "../../images/dev.png" alt = "ZipDev" />
            </header>`;
    }
    connectedCallback() {
        // When creating closed shadow trees, you'll need to stash the shadow root
        // for later if you want to use it again. Kinda pointless.
        const header = this._shadowRoot.querySelector('.header');
    }
});