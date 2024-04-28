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
			<style>${styles}</style>
			<div class="container-product">
			<div class="content-left">
				<img class="img-product" src="${this.image}">
			</div>
			<div class="content-right">
				<h1>${this.name}</h1>
				<p>${this.price}</p>
			</div>
		</div>
      `;
		}
	}
}

customElements.define('shopping-card-item', ShoppingCartItem);
export default ShoppingCartItem;
