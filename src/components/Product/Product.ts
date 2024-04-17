import styles from './Product.css';

class ProductCard extends HTMLElement {
	image?: string;
	name?: string;
	description?: string;
	category?: string;
	rating?: string;
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
        <img src = "${this.image}">
        <h1>${this.name}</h1>
        <p>${this.description}</p>
        <small>${this.category}</small>
        <small>${this.rating}</small>
        <small>${this.price}</small>
        <button onclick="alert('¡Añadido!')">Añadir al carrito</button>
      </div>
      `;
		}
		const cssComponent = this.ownerDocument.createElement('style');
		cssComponent.textContent = styles;
	}
}

customElements.define('product-card', ProductCard);
export default ProductCard;
