import styles from './ShoppingCartItem.css';

class ShoppingCartItem extends HTMLElement {
	image?: string;
	name?: string;
	price?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <div>
        <img src = "">
        <h1>hola</h1>
        <small></small>
      </div>
      `;
		}
		const cssComponent = this.ownerDocument.createElement('style');
		cssComponent.textContent = styles;
	}
}

customElements.define('shopping-card-item', ShoppingCartItem);
export default ShoppingCartItem;
